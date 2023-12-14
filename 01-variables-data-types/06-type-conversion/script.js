// String
let amount = '100';

// Convert to a number type
amount = parseInt(amount);

// First, it will be string, then a number type
console.log(amount, typeof amount);

// Also converts it to a number
amount = +amount;
console.log(amount, typeof amount);

// Convert from number to string
let anotherAmount = 100;
anotherAmount = anotherAmount.toString();
console.log(anotherAmount, typeof anotherAmount);

// Also converts 'anotherAmount' to string
anotherAmount = String(anotherAmount);
console.log(anotherAmount, typeof anotherAmount);

// What about decimal?
let decimalNumber = '99.5';

// Convert string to decimal
decimalNumber = parseFloat(decimalNumber);
console.log(decimalNumber, typeof decimalNumber);
// If you use 'parseInt', it will convert to number but remove the '.5'.
// So if you want to retain the decimal, use parseFloat.

// Convert number to boolean
amountBoolean = 1;
console.log(amountBoolean, typeof amountBoolean);
amountBoolean = Boolean(amountBoolean);
console.log(amountBoolean, typeof amountBoolean);

// Try to parse a string that is not a number
nonNumber = 'happy';
nonNumber = parseInt(nonNumber);
console.log(nonNumber, typeof nonNumber);
// This is converted to type 'number' but not a number: NaN
// NaN is a global property of the window object, non-writable.

// WHy did .toString() method work on a primitive?
//JavaScipt attaches a special object wrapper to a primitive.
