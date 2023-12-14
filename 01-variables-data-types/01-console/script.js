console.log(100);
console.log('Hello WOrld!');
console.log(20, 'hello', true);

const x = 100;
console.log(x);

console.error('Alert');
console.warn('Warning');

console.table({ name: 'Brad', email: 'gmail.com' });

console.group('simple');
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
