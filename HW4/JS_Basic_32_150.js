//32. Write a JavaScript program to find a value which is nearest to 100
// from two different given integer values.
function nearestTo100 (int1, int2) {
    if (((100 - int1) ** 2) < ((100 - int2) ** 2)) {
        return int1;
    } else if ((((100 - int1) ** 2) > ((100 - int2) ** 2))) {
        return int2;
    } else {
        return `${int1} ${int2}`;
    }
}

console.log(nearestTo100(0, 5));
console.log(nearestTo100(110, 5));
console.log(nearestTo100(-100, 300));
console.log(nearestTo100(0, 0));