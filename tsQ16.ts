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
