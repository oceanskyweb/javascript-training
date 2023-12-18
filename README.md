# JavaScript Training

## All data is associated with a data type

- String - Sequence of characters. Must be in quotes or backticks
- Number - Integers as well as floating-point numbers
- boolean - Logical entity / true or false
- Null - Intentional absence of any object value
- Undefined - Variable that has yet to be defined / assigned
- Symbol - Added ES2015(ES6) built-in object whose constructors return a unique symbol
- BigInt - Numbers that are greater than the "Number" type can handle

### REFERENCE TYPE (OBJECTS)

Reference types or "objects" are non-primitive value and when
assigned to a variable, the variable is given a reference
to that value.

- Object literals, arrays and functions are all reference types

## STATIC TYPING VS DYNAMIC TYPE

JavaScipt is dynamically-typed. In other words, we don't explicitly define the 'type' of variable like other languages that are statically-typeed (e.g. Java, C, C++).

### Examples

JavaScript
`let num = 4;`

Statically-Typed Languages
`String num = 4;`

## TypeScript

Is a superset of JavaScript and has some additional features. It allows static-typing. Why is this helpful? It can make your code easier to read and less prone to errors.

# Data Types

## String

```javascript
const firstName = 'Sarah';
console.log(firstName, typeof firstName);
```

```javascript
const output = firstName;
console.log(output, typeof output);
```

## Number

```javascript
const age = 30;
console.log(age, typeof age);
const temperature = 98.5;
console.log(temperature, typeof temperature); // Also a number type
```

## Boolean

```javascript
const hasKids = true;
console.log(hasKids, typeof hasKids);
```

## Null

```javascript
const aptNumber = null;
const housing = aptNumber;
console.log(housing, typeof housing);
```

**It returns object...Why?**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

## Undefined

```javascript
let score; // Declared variable without defining it
const emptyVariable = score;
console.log(emptyVariable);
```

## Symbol

```javascript
const id = Symbol('id');
const symbolType = id;
console.log(symbolType);
```

## BigInt

```javascript
const n = 44897793493450n;
const bigIntType = n;
console.log(bigIntType, typeof bigIntType);
```

## Reference Types

```javascript
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
```

**Why defined as function and not object?**
https://262.ecma-international.org/5.1/#sec-11.4.3

## Primitive Type: Stored in "stack"

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

## Reference Types: Stored in Heap

- Arrays
- Functions
- Objects

Variables are created in stack, even object variables. If you create a variable and make it an object, the variable is stored in the stack, but the object is accessed by reference in the heap.

- If you create a new variable and assign it an object variable that already exist, a new "object" is not created. Instead, it points or references the existing object in heap. Thus, you can now use the new variable to change values inside the existing object.

### See Example below

```javascript
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
```

## Type Conversion or Type Casting

It's the process of converting a value from one type to another.

## String

`let amount = '100';`

## Convert to a number type

`amount = parseInt(amount);`

## First, it will be string, then a number type

`console.log(amount, typeof amount);`

## Also converts it to a number

```JavaScript
amount = +amount;
console.log(amount, typeof amount);
```

## Convert from number to string

```JavaScript
let anotherAmount = 100;
anotherAmount = anotherAmount.toString();
console.log(anotherAmount, typeof anotherAmount);
```

**WHy did .toString() method work on a primitive?**

- JavaScipt attaches a special object wrapper to a primitive.

## Also converts 'anotherAmount' to string

```JavaScript
anotherAmount = String(anotherAmount);
console.log(anotherAmount, typeof anotherAmount);
```

## What about decimal?

`let decimalNumber = '99.5';`

## Convert string to decimal

```JavaScript
decimalNumber = parseFloat(decimalNumber);
console.log(decimalNumber, typeof decimalNumber);
```

If you use 'parseInt', it will convert to number but remove the '.5'.
So if you want to retain the decimal, use parseFloat.

## Convert number to boolean

```JavaScript
amountBoolean = 1;
console.log(amountBoolean, typeof amountBoolean);
amountBoolean = Boolean(amountBoolean);
console.log(amountBoolean, typeof amountBoolean);
```

## Try to parse a string that is not a number

```JavaScript
nonNumber = 'happy';
nonNumber = parseInt(nonNumber);
console.log(nonNumber, typeof nonNumber);
```

This is converted to type `number` but not a number: NaN
NaN is a global property of the window object, non-writable.

## JavaScript Arithmetic Operators

```JavaScript
// 1. Arithmetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = 'Hello' + 'World';
x = 'Hello' + ' ' + 'World';

// Exponent Operator
x = 2 ** 3;

// Increments
x = 1;
x = x + 1;
x++;

// Decrement
x = x - 1;
x--;

// 2. Assignment Operators
x = 10;
x += 5; // x = x + 5;
x -= 5; // x = x - 5;
x *= 5; // x = x * 5;
x /= 5; // x = x / 5;
x %= 5; // x = x % 5;
x **= 5; // x = x ** 5;

// 3. Comparison Operators
x = 2 == 2; // True
x = 2 == 4; // False
x = 2 === 2; // True (Evaluates the value AND type)
x = 2 === '2'; // False (Evaluates the value AND type)
x = 2 != 2; // False
x = 2 != 3; // True
x = 2 !== '2'; // True -- Because 2 is not equal to '2' string. Also type is checked. (Version of 2 ===2)
x = 10 > 5; // True
x = 10 < 5; // False
x = 10 >= 5; // True
x = 10 <= 5; // False

console.log(x);
```

## Type Coercion

Type Coecion is when JS converts the value type when you apply operators to values that have different types.

```JavaScript
let x;

// JS implicitly changed the digit 5 to a string
// because the + operator concatenated both values.
x = 5 + '5'; // 55 string

// Here we manually converted the string to a number.
x = 5 + Number('5'); // 5 Number

// Here JavaScript coerced the string into a number
// Why? Because * operator doesn't concatenate two values.
// So it automatically coerced it to number 5 to be multiplied.
x = 5 * '5'; // 25 number

// Here JavaScript can't concatenate 'null' with anything so it
// coerced it to 0.
x = 5 + null; // 5 number
x = Number(null); // 0 number
x = Number(true); // 1 number
x = x + true; // 2 number (True is coerced to a 1 by JS)
x = x + false; // 2 (Nothing is reduced because false is coerced to 0)

x = 5 + undefined; //NaN - Anyhting added to undefined results in NaN

console.log(x, typeof x);
```

## Type Coercion

```JavaScript
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
```
