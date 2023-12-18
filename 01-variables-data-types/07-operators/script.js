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
