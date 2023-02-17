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
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
