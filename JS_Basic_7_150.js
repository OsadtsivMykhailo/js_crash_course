//7. Write a JavaScript program to find 1st January is being a Sunday
// between 2014 and 2050.
let d = new Date();
for (let i = 2014; i<2051; i++) {
    d.setFullYear(i, 0, 1);
    if (d.getDay() == 0) {
        console.log(`In this ${i} year, the first of January is Sunday`);
    } else console.log(`In this ${i} year, the first of January isn't Sunday`);
}