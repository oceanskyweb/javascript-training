let x;

const name = 'John';
const age = 30;

// Concatenating Strings
x = 'Hello, your name is ' + name + ' and your age is ' + age;

// Template Literals with strings, intodruced in ES6 (2015)
// Template literals also work with numbers
x = `Hello, your name is ${name} and your age is ${age}`;

// String properties and methods
const str = 'Hello World';
x = str.length; //11; Properties don't use parenthesis, only methods
// This is what JS does when surrounding s with wrapper
const s = new String('Hello World');

x = typeof s; // object

// Access value by numbered keys
x = s[0]; // H
x = s[1]; // e

// Displays all methods available
// to this literal witht he help of wrapper.
// If you change console.log to s, the numbered keys are listed.
x = s.__proto__;

x = s.toUpperCase(); // HELLO WORLD
x = s.toLowerCase(); // hello world

x = s.charAt(0); //H -- Is the same as x = s[0]

x = s.indexOf('H'); //0
x = s.indexOf('e'); //1 -- will display first instance of letter

x = s.substring(0, 5); // Hello
x = s.substring(7); // orld -- Start with 7 and goes to end of string
x = s.slice(0, 5); // Hello - w/ slice you can start at end
x = s.slice(-11, -6); // Hello - w/ slice you can start at end

x = s.trim(); // Gets rid of white space before or after end of string

x = s.replace('World', name); // Hello John -- search for word and replace it.

x = s.includes('Hell'); // true -- check if word is included in string

x = s.valueOf(); // Hello World -- Get true primitive value

x = s.split(); // Produces an array the string in key 0
x = s.split(''); // Produces an array the string broken up into keys

console.log(x);
