import { TransactionData } from './types/ClassData'

export default class Transaction implements TransactionData {
  constructor(
    public createdTime: number,
    public cert: {
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
          receipt: string
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
  ) {}
}
