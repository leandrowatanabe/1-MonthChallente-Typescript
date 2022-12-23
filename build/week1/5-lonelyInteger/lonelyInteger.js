"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lonelyinteger(a) {
    const ocurrencys = [];
    const result = [];
    for (let i = 0; i < a.length; i++) {
        ocurrencys.push(a.filter(element => { return element === a[i]; }));
        result[i] = ocurrencys[i].length;
    }
    const index = result.indexOf(1);
    return index < 0 ? 0 : a[index];
}
exports.default = lonelyinteger;
