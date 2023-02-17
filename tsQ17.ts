let guests: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];

// print initial invitations
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});

// replace a guest who can't make it
let cancelledGuest = guests.splice(1, 1, "Nikola Tesla")[0];
console.log(`${cancelledGuest} can't make it to dinner.`);

// print updated invitations
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
});

guests.push("farrukh");
guests.push("afshan");
guests.push("piaic members");
guests.forEach((guest) => {
  console.log(`Dear ${guest}, i found a biiger dinner table.`);
});
console.log("-------------------------------------------");

for (let i = 0; i < guests.length - 2; i++) {
  console.log(`sorry I can’t invite you to dinner ${guests[i]}.`);
}
console.log("-------------------------------------------");
guests.shift();
guests.shift();
guests.shift();
guests.shift();
guests.forEach((guest) => {
  console.log(`Dear ${guest}, You are still invited.`);
});
console.log("-------------------------------------------");
guests.pop();
guests.pop();
console.log("List After Deleting all is" + guests);
