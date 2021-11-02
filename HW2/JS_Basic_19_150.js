//19. Write a JavaScript program to check whether a given integer
// is within 20 of 100 or 400.
function check19 (givenInt) {
    return ((givenInt - 100 >= -20 && givenInt - 100 <= 20) || 
    (givenInt - 400 >= -20 && givenInt - 400 <= 20));
}

console.log(check19(79));
console.log(check19(80));
console.log(check19(81));
console.log("----------------------------------------");
console.log(check19(119));
console.log(check19(120));
console.log(check19(121));
console.log("----------------------------------------");
console.log(check19(379));
console.log(check19(380));
console.log(check19(381));
console.log("----------------------------------------");
console.log(check19(419));
console.log(check19(420));
console.log(check19(421));