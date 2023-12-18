// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

x = myString.slice(1); // Save letters started from second value
myNewString = myString.charAt(0).toUpperCase() + x; // Developer

myNewString = myString.charAt(0).toUpperCase() + myString.slice(1); // Developer
console.log(myNewString);
