import { 
    KeyppiContract, 
    createLocalBlockchain,
    deploy,
    hash_input
} from "keyppi_contract"
import { PrivateKey, shutdown, Mina, PublicKey, Bool, isReady, Field} from 'snarkyjs';

// setup
await isReady

const account = createLocalBlockchain();
const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

// create an instance of the smart contract
const zkAppInstance = new KeyppiContract(zkAppAddress);

console.log('Deploying contract...');
const nullifier = Buffer.from("aksdasashdakjshdahdshdkshaajshdkhkhaduqi").toString('base64')
await deploy(zkAppInstance, zkAppPrivateKey, Field(nullifier), account);

let b = await Mina.getAccount(zkAppAddress);
console.log('b', b);