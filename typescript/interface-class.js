"use strict";
var ClassWithBooleanCheck = /** @class */ (function () {
    function ClassWithBooleanCheck() {
        this.result = false;
    }
    ClassWithBooleanCheck.prototype.isTrue = function () {
        return this.result;
    };
    ClassWithBooleanCheck.prototype.isFalse = function () {
        return !this.result;
    };
    return ClassWithBooleanCheck;
}());
