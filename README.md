# javascript-training

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

```
const firstName = 'Sarah';
console.log(firstName, typeof firstName);
```

```
const output = firstName;
console.log(output, typeof output);
```

## Number

```
const age = 30;
console.log(age, typeof age);
const temperature = 98.5;
console.log(temperature, typeof temperature); // Also a number type
```

## Boolean

```
const hasKids = true;
console.log(hasKids, typeof hasKids);
```

## Null

```
const aptNumber = null;
const housing = aptNumber;
console.log(housing, typeof housing);
// It returns object...Why?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
```

## Undefined

```
let score; // Declared variable without defining it
const emptyVariable = score;
console.log(emptyVariable);
```

## Symbol

```
const id = Symbol('id');
const symbolType = id;
console.log(symbolType);
```

## BigInt

```
const n = 44897793493450n;
const bigIntType = n;
console.log(bigIntType, typeof bigIntType);
```

## Reference Types

```
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
```

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

```
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
