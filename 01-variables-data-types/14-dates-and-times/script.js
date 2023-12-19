let d;

// Date Object
d = new Date();

// Date Converted to String
d = d.toString();

// Date Month is 0 index: 0 is Jan
d = new Date(2021, 0, 10);

// If you pass in string then 7 is July
d = new Date('2021-07-10'); // Jul 10 2021 00:00:00
d = new Date('07-10-2021'); // Jul 10 2021 00:00:00

// Starting string with year will be off by 1 day
d = new Date('2022-10-09'); // Sat Oct 08 2022 20:00:00

// Exact milisecond in time
d = Date.now();

d = new Date('07-10-2023');
d = d.getTime(); // 1688961600000
d = d.valueOf(); // 1688961600000

d = new Date(1688961600000); // Converted to Mon Jul 10 2023 00:00:00

d = Math.floor(Date.now() / 1000); // Time stamps in seconds

console.log(d, typeof d);
