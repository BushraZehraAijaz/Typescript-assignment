var guestArray = ["Hassan", "Hussain", "Hashim"];
guestArray.map(function (items) { return console.log("Hey,".concat(items, " you are invited to dinner")); });
var cannotAttend = "Hashim";
console.log("".concat(cannotAttend, " cannot make it, for dinner"));
var newGuest = "Hashir";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("Hey,".concat(items, " you are invited to dinner")); });
