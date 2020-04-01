let funcs = require("./functions");

const nbOperands = [0,4,4,2,2];
const functions = {
    "1": funcs.add,
    "2": funcs.mult,
    "3": funcs.input,
    "4": funcs.output,
    "99": funcs.nothing,
};

class Operation {

    // CodeOp 1 need 4 numbers in opcodes list
    
    constructor(opcodes) {
        this.opcodes = opcodes;
        this.index = 0;
        this.operator = 0;
        this.operands = [];
        this.modes = [];
    }

    getNextIndex() {
        this.index += 1 + this.operands.length;
    }

    loadNextOperation() {
        // Reset operands
        this.operands = [];
        this.modes = [];

        this.operator = this.opcodes[this.index];
        this.handleOperator();
        
        for (let i = 1; i < nbOperands[this.operator]; i++) {
            this.operands.push(this.opcodes[this.index + i]);
        }

    }

    executeOperation() {
        let func = functions[this.operator.toString()];
        this.opcodes = func(this.opcodes, this.operands, this.modes);
        this.getNextIndex();
    }

    isFinished() {
        return this.index >= this.opcodes.length;
    }

    handleOperator() {
        // No modes to be considered
        if (this.operator < 100) return;

        let val = this.operator;

        this.operator = val % 100;
        val = Math.floor(val / 100);
        while (val !== 0) {
            this.modes.push(val % 10);
            val = Math.floor(val / 10);
        }
    }
}

module.exports = {
    Operation,
}