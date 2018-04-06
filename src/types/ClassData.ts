export interface NodeData {
  url: string
}

export interface BlockChainData {
  chain: BlockData[]
  difficulty: number
  pendingTransactions: TransactionData[]
  createTransaction(t: TransactionData): void
  addBlock(b: BlockData): void
  getNextBlock(): BlockData
  isChainValid(): boolean
}

export interface BlockData {
  previousHash: string
  timestamp: string
  transactions: TransactionData[]
  hash: string
  nonce: number
  key: string
}

export interface TransactionData {
  cert: Cert | boolean
  createdTime: number
  error: undefined | { name: string; type: boolean }[]
}

export type Cert = {
  address: string
  avatar: string
  category: string
  country: string
  date: number
  documents: {
    ideaku: {
      _id: string
      hash: string
      certificate: number
      payment: string
      receipt: number
    }
  }
  latitude: number
  lngitude: number
  media: string
  media_name: string
  name: string
  isPrivate: boolean
  title: string
}
