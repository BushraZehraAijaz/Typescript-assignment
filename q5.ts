// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famousperson :string = "Albert Einstein";
let famousquote : string = '"Spread love everywhere you go"';

// compose message

let message:string = `${famousperson} once said, ${famousquote}`;
console.log(message);