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
