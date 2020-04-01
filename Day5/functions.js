var readline = require("readline-sync");

function add(opcodes, operands, modes) {
    const first = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const second = modes[1] === 1 ? operands[1] : opcodes[operands[1]]
    opcodes[operands[2]] = first + second;
    return opcodes;
}

function mult(opcodes, operands, modes) {
    const first = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const second = modes[1] === 1 ? operands[1] : opcodes[operands[1]]
    opcodes[operands[2]] = first * second;
    return opcodes;
}

function input(opcodes, operands, modes) {
    opcodes[operands[0]] = parseInt(readline.question("Number input required: \n> "), 10);
    return opcodes;
}

function output(opcodes, operands, modes) {
    if (modes[0] === 1) {
        console.log(operands[0]);
    } else {
        console.log(opcodes[operands[0]]);
    }
    return opcodes;
}

function nothing(opcodes, operands, modes) {
    return opcodes;
}

module.exports = {
    add,
    mult,
    input,
    output,
    nothing,
}