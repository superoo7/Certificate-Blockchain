import sha256 = require('js-sha256')
import { BlockChainData, BlockData, TransactionData } from './types/ClassData'
import Block from './block'

export default class Blockchain implements BlockChainData {
  public chain: BlockData[]
  public difficulty: number
  public pendingTransactions: TransactionData[]

  constructor() {
    this.pendingTransactions = []
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 2
  }

  private createGenesisBlock(): BlockData {
    return new Block('0', Date.now().toString(), [])
  }

  public createTransaction(t: TransactionData): void {
    this.pendingTransactions = [...this.pendingTransactions, t]
  }

  public addBlock(b: BlockData): void {
    this.chain = [...this.chain, b]
  }

  private getLastBlock(): BlockData {
    return this.chain[this.chain.length - 1]
  }

  public getNextBlock(): BlockData {
    let b = new Block(this.getLastBlock().hash, Date.now().toString(), this.pendingTransactions)
    b.hash = this.generateHash(b)
    this.pendingTransactions = []
    return b
  }

  private generateHash(b: BlockData): string {
    let hash = sha256(b.key)

    while (!hash.startsWith(Array(this.difficulty + 1).join('0'))) {
      b.nonce++
      hash = sha256(b.key)
    }

    console.log(`Mined Block: ${hash}`)
    return hash
  }

  public isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== this.generateHash(currentBlock)) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }

    return true
  }
}
