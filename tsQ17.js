var guests = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
// print initial invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
// replace a guest who can't make it
var cancelledGuest = guests.splice(1, 1, "Nikola Tesla")[0];
console.log("".concat(cancelledGuest, " can't make it to dinner."));
// print updated invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.push("farrukh");
guests.push("afshan");
guests.push("piaic members");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", i found a biiger dinner table."));
});
console.log("-------------------------------------------");
for (var i = 0; i < guests.length - 2; i++) {
    console.log("sorry I can\u2019t invite you to dinner ".concat(guests[i], "."));
}
console.log("-------------------------------------------");
guests.shift();
guests.shift();
guests.shift();
guests.shift();
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are still invited."));
});
console.log("-------------------------------------------");
guests.pop();
guests.pop();
console.log("List After Deleting all is" + guests);
