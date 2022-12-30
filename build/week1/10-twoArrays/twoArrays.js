"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoArrays(k, A, B) {
    const sortedA = A.sort((a, b) => { return a - b; });
    const sortedB = B.sort((a, b) => { return b - a; });
    const summedElements = sortedA.map((element, index) => { return element + sortedB[index]; });
    const result = summedElements.filter(element => { return element >= k; });
    return result.length === A.length ? 'YES' : 'NO';
}
exports.default = twoArrays;
