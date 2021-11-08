let str = window.localStorage.getItem("mainCh");
console.log(str);
const mainCharackter = JSON.parse(str);
function startingInfo2 () {
    if (typeof mainCharackter['surname'] !== "undefined") {
    document.getElementById("chName").innerHTML = mainCharackter.name + " "
    + mainCharackter.surname;
    } else {
        document.getElementById("chName").innerHTML = mainCharackter.name;
    }
}
startingInfo2();

const startingInfo1 = () => {
    document.getElementById("chLvl").innerHTML = `Level: ${mainCharackter.lvl}`;
}
startingInfo1();

const startingInfo3 = function() {
    document.getElementById("chStats").innerHTML = `Tai: ${mainCharackter.tai}    Nin: ${mainCharackter.nin}    Gen: ${mainCharackter.gen}`;
}
startingInfo3();
function startingInfo () {
    mainCharackter.curHP = mainCharackter.hp;
    mainCharackter.curChakra = mainCharackter.chakra;
    document.getElementById("chHp").innerHTML = `HP: ${mainCharackter.curHP}/${mainCharackter.hp}`;
    document.getElementById("chMp").innerHTML = `Chakra: ${mainCharackter.curChakra}/${mainCharackter.chakra}`;
}
startingInfo();
function refreshHpMp () {
    document.getElementById("chHp").innerHTML = `HP: ${mainCharackter.curHP}/${mainCharackter.hp}`;
    document.getElementById("chMp").innerHTML = `Chakra: ${mainCharackter.curChakra}/${mainCharackter.chakra}`;
}

function hit () { //own face;
    mainCharackter.curHP = 50;
    refreshHpMp(); 
}
