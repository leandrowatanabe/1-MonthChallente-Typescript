"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flippingBits(n) {
    const stringfiedInputNumber = Number(n).toString(2).split('');
    const initialArray = Array(32 - stringfiedInputNumber.length).fill('0');
    const result = parseInt(initialArray.concat(stringfiedInputNumber).map(element => { return element === '0' ? '1' : '0'; }).join(''), 2);
    return result;
}
exports.default = flippingBits;
