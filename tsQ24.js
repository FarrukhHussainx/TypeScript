var string1 = "hello";
var string2 = "world";
var number1 = 10;
var number2 = 20;
var array1 = [1, 2, 3, 4, 5];
var array2 = ["1", "2", "5"];
// Tests for equality and inequality with strings
console.log(string1 == "hello"); // true
console.log(string1 != string2); // true
console.log(string1 == "HELLO"); // false
console.log(string1 != "Hello"); // true
// Tests using the lower case function
console.log(string1.toLowerCase() == "hello"); // true
console.log(string2.toLowerCase() == "WORLD"); // false
// Numerical tests
console.log(number1 == 10); // true
console.log(number1 != number2); // true
console.log(number1 < number2); // true
console.log(number2 > number1); // true
console.log(number1 <= 10); // true
console.log(number2 >= 20); // true
// Tests using "and" and "or" operators
console.log(string1 == "hello" && number1 == 10); // true
console.log(string1 == "hello" || number1 == 20); // true
console.log(string1 == "HELLO" || number1 == 20); // false
// Test whether an item is in an array
console.log(array2.includes("3")); // true
console.log(array2.includes("6")); // false
// Test whether an item is not in an array
console.log(!array2.includes("6")); // true
console.log(!array2.includes("2")); // false
