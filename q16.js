// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// name array
var guestArray = ["Hassan", "Hussain", "Hashim"];
// cannot make dinner
var cannotAttend = "Hashim";
// invite new guest
var newGuest = "Hashir";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log(guestArray);
// send message
// guestArray.map((items)=> console.log(`Hey,${items} you are invited to dinner`));
console.log("Welcome all, we found a bigger table!");
guestArray.unshift("Hasnain");
console.log(guestArray);
var middleGuest = "Hadi";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
guestArray.push("Haseeb");
console.log(guestArray);
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " You are invited to dinner!")); });
