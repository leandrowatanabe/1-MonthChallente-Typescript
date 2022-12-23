"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function miniMaxSum(arr) {
    if (arr.length < 2) {
        return [arr[0], arr[0]];
    }
    const sum = arr.reduce((a, b) => { return a + b; });
    const minNumber = arr.reduce((a, b) => { return Math.min(a, b); });
    const maxNumber = arr.reduce((a, b) => { return Math.max(a, b); });
    return [sum - maxNumber, sum - minNumber];
}
exports.default = miniMaxSum;
