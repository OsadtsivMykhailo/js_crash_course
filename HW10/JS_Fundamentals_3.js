//3. Write a JavaScript program to converts a comma-separated values (CSV) string 
//to a 2D array.

function csvToArray (str) {
    let arr1D = str.split(",");
    const arr2d = [];
    const numCols = 2;
    if (numCols) // safety first!
        for (let i = 0; i < arr1D.length; i += numCols)
            arr2d.push(arr1D.slice(i, i + numCols));
    return arr2d;
}

console.log(csvToArray("3,4,5,sasdsa,23,24242,231232"));
console.log(csvToArray("3asdd,4,5,sa1232sdsa,23,24242,231232"));