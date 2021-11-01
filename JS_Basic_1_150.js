const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDay = days[d.getDay()];

console.log(`Today is : ${currentDay}.`);