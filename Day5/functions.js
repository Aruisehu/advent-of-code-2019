var readline = require("readline-sync");

function add(opcodes, operands, modes) {
    const first = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const second = modes[1] === 1 ? operands[1] : opcodes[operands[1]]
    opcodes[operands[2]] = first + second;
    return {
        opcodes,
        jump: null,
    };
}

function mult(opcodes, operands, modes) {
    const first = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const second = modes[1] === 1 ? operands[1] : opcodes[operands[1]]
    opcodes[operands[2]] = first * second;
    return {
        opcodes,
        jump: null,
    };
}

function input(opcodes, operands, modes) {
    opcodes[operands[0]] = parseInt(readline.question("Number input required: \n> "), 10);
    return {
        opcodes,
        jump: null,
    };
}

function output(opcodes, operands, modes) {
    if (modes[0] === 1) {
        console.log(operands[0]);
    } else {
        console.log(opcodes[operands[0]]);
    }
    return {
        opcodes,
        jump: null,
    };
}

function nothing(opcodes, operands, modes) {
    return {
        opcodes,
        jump: null,
    };
}

function jumpTrue(opcodes, operands, modes) {
    const boolVal = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const jumpVal = modes[1] === 1 ? operands[1] : opcodes[operands[1]];
    if (boolVal !== 0)  {
        return {
            opcodes,
            jump: jumpVal,
        };
    }
    return {
        opcodes,
        jump: null,
    };
}

function jumpFalse(opcodes, operands, modes) {
    const boolVal = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const jumpVal = modes[1] === 1 ? operands[1] : opcodes[operands[1]];
    if (boolVal === 0)  {
        return {
            opcodes,
            jump: jumpVal,
        };
    }
    return {
        opcodes,
        jump: null,
    };
}

function less(opcodes, operands, modes) {
    const first = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const second = modes[1] === 1 ? operands[1] : opcodes[operands[1]];
    opcodes[operands[2]] = first < second ? 1 : 0;
    return {
        opcodes,
        jump: null,
    };
}

function equals(opcodes, operands, modes) {
    const first = modes[0] === 1 ? operands[0] : opcodes[operands[0]];
    const second = modes[1] === 1 ? operands[1] : opcodes[operands[1]];
    opcodes[operands[2]] = first === second ? 1 : 0;
    return {
        opcodes,
        jump: null,
    };
}

module.exports = {
    add,
    mult,
    input,
    output,
    nothing,
    jumpTrue,
    jumpFalse,
    less,
    equals
}