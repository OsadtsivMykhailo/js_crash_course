//14. Write a JavaScript exercise to get the extension of a filename. 
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());
//.split divide string on array of strings by separator; 
//.pop get and remove last array element;