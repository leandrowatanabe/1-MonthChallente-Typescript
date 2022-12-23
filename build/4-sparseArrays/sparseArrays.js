"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sparseArrays(strings, queries) {
    const ocurrencys = [];
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        ocurrencys.push(strings.filter(element => { return element === queries[i]; }));
        result[i] = ocurrencys[i].length;
    }
    return result;
}
exports.default = sparseArrays;
