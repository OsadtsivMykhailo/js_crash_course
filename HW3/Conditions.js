for (let j = -1; j < 2; j++) {
    if (j < 0) {
        console.log("true");
    } else if (j != 0) {
        console.log('false');
    } else {
        console.log(`equal`);
    }
}

let i = 0;
i == 0 ? i+=1 : i-=1;
console.log(i);

switch (i) {
    case 1 : i**=0;
    break;
    default: i = Math.SQRT2;
}
console.log(i);