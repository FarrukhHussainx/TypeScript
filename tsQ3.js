"use strict";
exports.__esModule = true;
var name = "FarrUkh";
console.log("Lowercase: ".concat(name.toLowerCase()));
console.log("Uppercase: ".concat(name.toUpperCase()));
function toTitleCase(str) {
    var y = str.slice(1).toLowerCase();
    var x = str.slice(0, 1).toUpperCase();
    return x + y;
}
console.log("Titlecase: ".concat(toTitleCase(name)));
