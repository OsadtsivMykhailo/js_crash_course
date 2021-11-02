//17. Write a JavaScript program to compute the absolute difference between 
//a specified number and 19. Returns triple their absolute difference 
//if the specified number is greater than 19.
function diff17 (specNumber) {
    if (specNumber > 19) return (specNumber - 19) * 3;
    else return 19 - specNumber;
}

console.log(diff17(13));
console.log(diff17(19));
console.log(diff17(23));