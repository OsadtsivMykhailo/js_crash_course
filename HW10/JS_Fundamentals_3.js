//3. Write a JavaScript program to converts a comma-separated values (CSV) string 
//to a 2D array.

function csvToArray (str) {
    return str.split(",");
}

console.log(csvToArray("3,4,5,sasdsa,23,24242,231232"));
console.log(csvToArray("3asdd,4,5,sa1232sdsa,23,24242,231232"));