//6. Write a JavaScript program to determine whether a given year is a leap year
// in the Gregorian calendar.
let year = 2019;
function IsItLeapYearQS (year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
for (let i = year; i < 2031; i++) {
    IsItLeapYearQS(i);
}