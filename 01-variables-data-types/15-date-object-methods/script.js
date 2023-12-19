let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

// Gets current year unless specific year was provided when object
// was instantiated.
x = d.getFullYear();

// Month is 0 based so although currently is December
// This will show as November (11), unless a specific month
// was provided when object was instantiated.
x = d.getMonth(); // 11
// Optional: x = d.getMonth() + 1;

x = d.getDate(); // Date of the month
x = d.getDay(); // Get Day of the week in number -> 1 == Monday
x = d.getHours();
x = d.getMinutes();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

// API to use for dates
x = Intl.DateTimeFormat('en-US').format(d); // 12/18/2023
x = Intl.DateTimeFormat('default').format(d); // 18/12/2023
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // December

// Call method on date object using API
x = d.toLocaleString('default', { month: 'short' });

// Preferred way to produce dates
x = d.toLocaleString('default', {
  month: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
}); // December 18, 2023 at 11:54:24 PM

console.log(x);
