// Core Module

const SHA256 = require('crypto-js/sha256')

// Temporary holder for the chain
var CHAIN = [];

// Structure of each block in the chain
class Block {
    constructor( data, previousHash, timeStamp, hash) {
        this.data = data;
        this.previousHash = previousHash;
        this.timeStamp = new Date();
        this.hash = this.calculateHash(JSON.stringify(data) + previousHash + timeStamp); 
    }

    calculateHash(hashString) {
      return SHA256(hashString);     
    }
}

// Structure of the chain
class Chain {

    constructor() {
        CHAIN.push(this.createChain());
    }

    createChain() {
        // Only to be executed once when the network is initialized
        console.log('You just started a new chain')
        return new Block('||Genesis Block||', 'BEETA')
    }

    addBlock() {
        // Adds new block to the chain after a certain amount of data is obtained (e.g transaction data)
        CHAIN.push(new Block('REAL-DATA', CHAIN[CHAIN.length - 1].hash));
    }
}

// Testing and Debugging

abc = new Chain();
//console.log(CHAIN[0]);
abc.addBlock();
abc.addBlock();
//console.log(CHAIN[1]);
console.log(JSON.stringify(CHAIN,'\n'))