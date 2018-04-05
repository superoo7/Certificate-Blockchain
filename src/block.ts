import { BlockData, TransactionData } from "./types/ClassData";

export default class Block implements BlockData {
    public hash: string;
    public nonce: number;
    
    constructor(
        public previousHash: string,
        public timestamp: string,
        public transactions: TransactionData[],
    ) {
        this.nonce = 0;
        this.hash = '';
    }

    get key(): string {
        return JSON.stringify(this.transactions) + this.timestamp + this.previousHash + this.nonce;
    }
}