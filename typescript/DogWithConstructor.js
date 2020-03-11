"use strict";
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name || 'Rover';
        this.age = age || 5;
    }
    return Dog;
}());
{
    var fido = new Dog();
}
