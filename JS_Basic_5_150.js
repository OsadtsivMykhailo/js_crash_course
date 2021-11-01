//5. Write a JavaScript program to rotate the string 'w3resource' in right direction
// by periodically removing one letter from the end of the string and attaching it
// to the front.
let str = 'w3resource';
function RotateStringLikeUroboros (str1) {
    let str2 = str1.charAt(str1.length - 1) + str1.slice(0, str1.length - 1);
    return str2;
}
console.log(str);
for (let i = 0; i < 10; i++) {
    str = RotateStringLikeUroboros(str);
    console.log(str);
}

