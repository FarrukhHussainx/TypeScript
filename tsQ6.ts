let nameWithWhitespace: string = " \t\n Farrukh Hussain \n\t ";
//\t use 4 bite of space and \n to move on next line
console.log(`Name with whitespace: "${nameWithWhitespace}"`);

let nameWithoutWhitespace: string = nameWithWhitespace.trim();
console.log(`Name without whitespace: "${nameWithoutWhitespace}"`);
