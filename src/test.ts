import Blockchain from './blockchain'
import Transaction from './transaction'

// let sample1 = require('./sample/sample1')
// let sample2 = require('./sample/sample2')
let bc = new Blockchain()
// let t = new Transaction(Date.now(), sample1)
let sample = require('../sample.json')
let t = new Transaction(Date.now(), sample)

bc.createTransaction(t)
console.log(bc)
let nb = bc.getNextBlock()
bc.addBlock(nb)

console.log(bc)
