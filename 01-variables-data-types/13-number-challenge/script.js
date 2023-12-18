const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

let sumOutput = x + y;
let differenceOutput = x - y;
let productOuput = x * y;
let quotientOutput = x / y;
let rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOuput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);
