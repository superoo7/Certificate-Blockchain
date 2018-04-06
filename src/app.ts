// library import
import * as express from 'express'
import * as bodyParser from 'body-parser'
import fetch from 'node-fetch'

// file import
import Block from './block'
import Blockchain from './blockchain'
import Transaction from './transaction'
import { TransactionData, BlockChainData, Cert } from './types/ClassData'

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
let transactions: TransactionData[] = []
let nodes = []
let bc: BlockChainData = new Blockchain()

app.get('/', function(req, res) {
  var host = req.get('host')
  console.log(host)
  res.json(transactions)
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
  transactions = [...transactions, transaction]
  res.json(transactions)
})

app.listen(port, function() {
  console.log('server has started at port ' + port)
})
