import { TransactionData } from "./types/ClassData";

export default class Transaction implements TransactionData {
    constructor(
        public address: string,
        public avatar: string,
        public category: string,
        public country: string,
        public date: number,
        public documents: {
            ideaku: {
                _id: string,
                hash: string,
                certificate: number,
                payment: string,
                receipt: string,
            }
        },
        public latitude: number,
        public lngitude: number,
        public media: string,
        public media_name: string,
        public name: string,
        public isPrivate: boolean,
        public title: string
    ) {}
}