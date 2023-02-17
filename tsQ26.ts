// Assign the alien color
let alien_color: string = "green";

// If statement to test whether the alien's color is green
if (alien_color == "green") {
  console.log("The player just earned 5 points.");
} else {
  console.log("The player just earned 10 points.");
}

// Assign the alien color
alien_color = "yellow"; // Change the value to 'yellow' or 'red' to fail the if test

// If statement to test whether the alien's color is green
if (alien_color == "green") {
  console.log("The player just earned 5 points.");
} else {
  console.log("The player just earned 10 points.");
}
