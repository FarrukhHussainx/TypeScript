var nameWithWhitespace = " \t\n Farrukh Hussain \n\t ";
//\t use 4 bite of space and \n to move on next line
console.log("Name with whitespace: \"".concat(nameWithWhitespace, "\""));
var nameWithoutWhitespace = nameWithWhitespace.trim();
console.log("Name without whitespace: \"".concat(nameWithoutWhitespace, "\""));
