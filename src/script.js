"use strict";
function transform(array, mapper) {
    // TODO
    var result = [];
    array.forEach(function (elem) { return result.push(mapper(elem)); });
    return result;
}
function doubleNumber(n) {
    return n * 2;
}
function wrapString(str, before, after, replacer) {
    if (before === void 0) { before = '['; }
    if (after === void 0) { after = ']'; }
    if (replacer === void 0) { replacer = null; }
    var result = str;
    if (replacer) {
        result = '';
        for (var i = 0; i < str.length; i++) {
            result += str[i];
        }
    }
    if (before) {
        result = before + result;
    }
    if (after) {
        result = result + after;
    }
    return result;
}
var a = transform([1, 2, 3, 4], doubleNumber);
var b = transform(['h', 'e', 'l', 'l', 'o'], wrapString);
var c = transform(['h', 'e', 'l', 'l', 'o'], function (n) { return wrapString(n, '&', null); });
console.log('a', a);
console.log('b', b);
console.log('c', c);
