//31. Write a JavaScript program to find the largest of three given integers.
function LargestInt (int1, int2, int3) {
    let arr = [int1, int2, int3];
    arr.sort(function(a, b){return b - a});
    return arr[0];
}

console.log(LargestInt(0, -5, 15));
console.log(LargestInt(10, -25, 15));
console.log(LargestInt(110, -5, -15));
console.log(LargestInt(0, 25, 15));