"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeConversion(s) {
    const splitedString = s.split(':');
    let hours = 0;
    if (s[8] === 'P' && +splitedString[0] === 12) {
        return s.split('P')[0];
    }
    else if (s[8] === 'A' && +splitedString[0] === 12) {
        hours = 0;
    }
    else if (s[8] === 'P' && +splitedString[0] < 12) {
        hours = +splitedString[0] + 12;
    }
    else {
        hours = +splitedString[0];
    }
    return `${hours > 10 ? hours : `0${hours}`}:${splitedString[1]}:${splitedString[2][0]}${splitedString[2][1]}`;
}
exports.default = timeConversion;
