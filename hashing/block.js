const hash = require("./index")

class Block {
    constructor(data){
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = ""
    }

    generateHash = () => {
        return hash(this.body)
    }
}

const TestBlock =  new Block("TEST")

console.log(TestBlock.generateHash())