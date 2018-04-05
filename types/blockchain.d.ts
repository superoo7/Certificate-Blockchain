import { BlockChainData, BlockData, TransactionData } from "./types/ClassData";
import Block from './block';
export default class Blockchain implements BlockChainData {
    chain: BlockData[];
    difficulty: number;
    pendingTransactions: TransactionData[];
    constructor();
    createGenesisBlock(): BlockData;
    createTransaction(t: TransactionData): void;
    addBlock(b: BlockData): void;
    getLastBlock(): BlockData;
    getNextBlock(): Block;
    private generateHash(b);
    isChainValid(): boolean;
}
