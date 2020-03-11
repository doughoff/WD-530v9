"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var entrees = ['hamburger'];
var sideOrders = ['fries', 'onion rings'];
var order = __spreadArrays(entrees, sideOrders, ['Pepsi']);
var order1 = {
    entree: "hamburger",
    drink: "Pepsi",
    sideOrder: "fries"
};
var update = { sideOrder: "onion rings" };
var order2 = __assign(__assign({}, order1), update);
console.log(order2);
// similar to the older version:
var order3 = Object.assign({}, order1, update);
console.log(order3);
