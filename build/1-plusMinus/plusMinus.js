"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function plusMinus(arr) {
    let positiveFrequency = 0;
    let negativeFrequency = 0;
    let zeroFrequency = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroFrequency += 1;
        }
        else if (arr[i] < 0) {
            negativeFrequency += 1;
        }
        else {
            positiveFrequency += 1;
        }
    }
    const result = `${(positiveFrequency / arr.length).toFixed(6)}\n${(negativeFrequency / arr.length).toFixed(6)}\n${(zeroFrequency / arr.length).toFixed(6)}`;
    console.log(result);
    return result;
}
exports.default = plusMinus;
