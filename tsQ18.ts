let placesToVisit: string[] = ["Tokyo", "Bali", "New York", "Paris", "Sydney"];

// Print original order
console.log("Original order:");
console.log(placesToVisit);

// Print alphabetical order
console.log("Alphabetical order:");
console.log([...placesToVisit].sort());

// Print original order again
console.log("Original order again:");
console.log(placesToVisit);

// Print reverse alphabetical order
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Print original order again
console.log("Original order again:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Original order again:");
console.log(placesToVisit);

// Sort the list in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);

// Sort the list in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:");
console.log(placesToVisit);
