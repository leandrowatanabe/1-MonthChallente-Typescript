"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function plusMinus(arr) {
    let positiveFrequency = arr.filter(element => { return element > 0; });
    let negativeFrequency = arr.filter(element => { return element < 0; });
    let zeroFrequency = arr.filter(element => { return element === 0; });
    const result = [
        (positiveFrequency.length / arr.length).toFixed(6),
        (negativeFrequency.length / arr.length).toFixed(6),
        (zeroFrequency.length / arr.length).toFixed(6)
    ];
    return result;
}
exports.default = plusMinus;
