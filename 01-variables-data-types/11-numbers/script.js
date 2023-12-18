let x;

const num = new Number(5);

x = num.toString(); // String 5
x = num.toString().length; // 1 - There's only 1 character after conversion
x = num.toFixed(2); // 5.00 string representation of a decimal. (change num value to 5.4527)
x = num.toPrecision(2); // 2 numbers in total instead of 2 decimals. Rounds up or down.
x = num.toExponential(2); // 4.45e+0 string
x = num.toLocaleString('en-US'); // Changes number to be presented per location
x = num.valueOf(); // 5 number
x = Number.MAX_VALUE; // 1.7976931348623157e+308 - Largest number able to use with Number
x = Number.MIN_VALUE; // 5e-324 - Lowest value able to use with Number

console.log(x, typeof x);
