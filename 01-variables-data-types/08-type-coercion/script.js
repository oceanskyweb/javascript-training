// Type Coecion is when JS converts the value type when you apply
// operators to values that have different types.

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
