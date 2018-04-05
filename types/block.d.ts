import { BlockData, TransactionData } from "./types/ClassData";
export default class Block implements BlockData {
    previousHash: string;
    timestamp: string;
    transactions: TransactionData[];
    hash: string;
    nonce: number;
    constructor(previousHash: string, timestamp: string, transactions: TransactionData[]);
    readonly key: string;
}
