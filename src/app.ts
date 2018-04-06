// library import
import * as express from 'express'
import * as bodyParser from 'body-parser'
import fetch from 'node-fetch'

// file import
import Block from './block'
import Blockchain from './blockchain'
import Transaction from './transaction'
import Node from './node'
import { TransactionData, BlockChainData, Cert, NodeData } from './types/ClassData'

// Express Server Setup
const app = express()
app.use(bodyParser.json())

// change port
let port: any
process.argv.forEach(function(val, index, array) {
  port = array[2]
})

if (port == undefined) {
  port = 3000
}

// Blockchain initiate
let nodes: NodeData[] = []
let bc: BlockChainData = new Blockchain()

app.get('/', function(req, res) {
  var host = req.get('host')
  console.log(host)
  res.json({
    difficulty: bc.difficulty,
    genesisBlock: bc.chain[0],
    repository: 'https://github.com/superoo7/Certificate-Blockchain'
  })
})

app.post('/nodes/register', function(req, res) {
  let url: { url: string }[] = req.body.urls
  url.map(data => {
    let node = new Node(data.url)
    nodes = [...nodes, node]
  })
})

app.get('/nodes', function(req, res) {
  res.json(nodes)
})

app.get('/blockchain', function(req, res) {
  res.json(bc)
})

app.post('/transactions', function(req, res) {
  let cert: Cert = req.body
  let transaction: TransactionData = new Transaction(Date.now(), cert)
  if (transaction.cert === false) {
    let reply
    try {
      // @ts-ignore
      reply = `Invalid Type for ${transaction.error.map(e => e.name).join(', ')}`
    } catch (e) {
      reply = `Invalid Type`
    }
    res.json({ error: reply })
  }
  bc.createTransaction(transaction)
  if (!bc.isChainValid) {
    res.json({ error: 'unable to create block' })
  }
  let nb = bc.getNextBlock()
  bc.addBlock(nb)
  res.json({
    hash: nb.hash,
    timestamp: nb.timestamp,
    index: bc.chain.length - 1,
    transactions: nb.transactions
  })
})

app.listen(port, function() {
  console.log('server has started at port ' + port)
})
