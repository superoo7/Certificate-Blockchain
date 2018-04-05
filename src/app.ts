import Blockchain from "./blockchain";
import Transaction from './transaction';



let sample = require('../sample.json');


let bc = new Blockchain();
let t = new Transaction(
    sample.address, 
    sample.avatar, 
    sample.category,
    sample.country,
    sample.date,
    sample.documents,
    sample.latitude,
    sample.lngitude,
    sample.mediam,
    sample.media_name,
    sample.name,
    sample.isPrivate,
    sample.title
);

bc.createTransaction(t);
console.log(bc);
let nb = bc.getNextBlock();
bc.addBlock(nb);

console.log(bc);