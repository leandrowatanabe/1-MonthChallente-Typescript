"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countingSort(arr) {
    const highestNumber = Math.max(...arr);
    const frequencies = [];
    for (let i = 0; i <= highestNumber; i++) {
        frequencies.push(arr.filter(element => { return i === element; }));
    }
    const result = frequencies.map(element => { return element.length; });
    return result;
}
exports.default = countingSort;
