let i = 0;
i == 0 ? i+=1 : i-=1;
console.log(i);
i == 0 ? i*=0 : i/=1;
console.log(i);
1 === 1 && i == 1 ? i %= 1 : i = Math.PI;
console.log(i);
i === 0 || i === 1 ? i++ : i--;
console.log(i);
switch (i) {
    case 1 : i**=0;
    break;
    default: i = Math.SQRT2;
}
console.log(i);
1 !== "1" ? i-- : i++;
console.log(i);
1 != "1" ? i-- : i++;
console.log(i);
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~ 5);
console.log(5 << 1);
console.log(5 >> 1);
console.log(5 >>> 1);
/// test 