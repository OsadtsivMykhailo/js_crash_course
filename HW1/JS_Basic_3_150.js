const d = new Date();
let year = d.getFullYear();
let mm = d.getMonth() + 1;
let dd = d.getDate();
console.log(`${mm}-${dd}-${year}, ${mm}/${dd}/${year} or ${dd}-${mm}-${year}, ${dd}/${mm}/${year}`)