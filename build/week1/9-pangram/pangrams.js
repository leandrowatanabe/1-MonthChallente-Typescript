"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pangrams(s) {
    const result = new Set(s.toLowerCase().match(/[a-z]/g));
    return result.size === 26 ? 'pangram' : 'not pangram';
}
exports.default = pangrams;
