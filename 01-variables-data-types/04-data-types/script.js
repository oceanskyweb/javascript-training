// String
const firstName = 'Sarah';
console.log(firstName, typeof firstName);

const output = firstName;
console.log(output, typeof output);

// Number
const age = 30;
console.log(age, typeof age);
const temperature = 98.5;
console.log(temperature, typeof temperature); // Also a number type

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
const housing = aptNumber;
console.log(housing, typeof housing);
// It returns object...Why?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
let score; // Declared variable without defining it
const emptyVariable = score;
console.log(emptyVariable);

// Symbol
const id = Symbol('id');
const symbolType = id;
console.log(symbolType);

// BigInt
const n = 44897793493450n;
const bigIntType = n;
console.log(bigIntType, typeof bigIntType);

// Reference Types
const numbers = [1, 2, 3, 5];
const referType = numbers;
console.log(referType, typeof referType);

const person = {
  name: 'Fig',
  age: 443,
};
console.log(person, typeof person);

function sayHello() {
  console.log('Hello');
}
const sayHelloFunc = sayHello;
console.log(sayHelloFunc, typeof sayHelloFunc);
// Why defined as function and not object?
// https://262.ecma-international.org/5.1/#sec-11.4.3

// variables
const name = 'John';
const johnAge = 30;

// New object, values are stored on the heap
const user = {
  name: 'Bob',
  age: 55,
};

// New variable references the existing object on heap
let newUser = user;

// console will show John and Bob as the names
console.log(name, user);

// New variable referencing existing object still shows Bob
console.log(newUser);

// Update name using new variable referencing existing object
newUser.name = 'Victor';

// Now the object has the name "Victor"
console.log(user);

// Both variable pointing to same object pring the same name now
console.log(user, newUser);
