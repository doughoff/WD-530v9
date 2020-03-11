"use strict";
function sendNumString(firstArg, secondArg) {
    secondArg = secondArg || "default value";
    console.log(firstArg, secondArg);
    return;
}
sendNumString(1, 'a');
sendNumString(1);
