let str = window.localStorage.getItem("mainCh");
console.log(str);
const mainCharackter = JSON.parse(str);
function startingInfo () {
    document.getElementById("chName").innerHTML = mainCharackter.name; 
}
startingInfo();