export interface BlockChainData {
    chain: BlockData[];
    difficulty: number;
    pendingTransactions: TransactionData[];
}
export interface BlockData {
    previousHash: string;
    timestamp: string;
    transactions: TransactionData[];
    hash: string;
    nonce: number;
    key: string;
}
export interface TransactionData {
    address: string;
    avatar: string;
    category: string;
    country: string;
    date: number;
    documents: {
        ideaku: {
            _id: string;
            hash: string;
            certificate: number;
            payment: string;
            receipt: string;
        };
    };
    latitude: number;
    lngitude: number;
    media: string;
    media_name: string;
    name: string;
    isPrivate: boolean;
    title: string;
}
