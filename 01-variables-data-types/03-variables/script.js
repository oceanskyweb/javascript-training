// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// var is original declaration but you don't see it anymore.
// ES2015 introduced let and const due to scope.
// - var and let work similarly in global scope
// - const is different
let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

age = 21;
console.log(age);

// Allowed to declare without a value and assign value later
let score;
score = 1;
console.log(score);
if (score) {
  ++score;
  console.log(score);
}

// Const must be declared and initialize at the same time.
// Const cannot be reassigned a new value
const x = 100;
// x = 200; //This is illegal

// You can change values of a const array
const arr = [1, 2, 3, 4];
arr.push(5); //Adds element to array using push method
console.log(arr);

// Const object similar to const arrays
const person = {
  name: 'brad',
};
person.name = 'John';
console.log(person);
person.email = 'dat@gmail.com';
console.log(person);
//You cannot reassign const a different value but you can change the value of keys in the array

// Declare multiple variables and const at the same time
let a, b, c, d;
const face = 10,
  e = 20;
