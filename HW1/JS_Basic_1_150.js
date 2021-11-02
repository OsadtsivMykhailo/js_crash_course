const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDay = days[d.getDay()];
let hour = d.toLocaleString('en-US', { hour: 'numeric', hour12: true });
let minuts = d.getMinutes();
let seconds = d.getSeconds();
console.log(`Today is : ${currentDay}.` + `\nCurrent time is : ${hour} : ${minuts} : ${seconds}`);