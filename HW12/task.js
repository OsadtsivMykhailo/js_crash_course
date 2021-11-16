//приходить два масива із словами
//і потрібно визначити яких слів найбільше і вивести топ 3 тих, 
//що найчастіше повторюються
const arr1 = ["a", "b", "c", "d", "b", "c", "d", "b", "b", "b", "b", "c", "c"];
const arr2 = ["Y", "b", "c", "d", "b", "c", "d", "b", "b", "b"];
function top3 (arr1, arr2) {
    let res = {};
    for (let i = 0; i < arr1.length; i++) {
        if (Object.keys(res).includes(arr1[i])) {
            res[arr1[i]]++;
        } else {
            res[arr1[i]] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (Object.keys(res).includes(arr2[i])) {
            res[arr2[i]]++;
        } else {
            res[arr2[i]] = 1;
        }
    }
//    console.log(res);
    let arrRes = Object.entries(res);
    let trueRes = [];
    //console.log(arrRes);
    for (let i = 0; i < 3; i++) {
        let del = 0;
        let max = [arrRes[0][0] , arrRes[0][1]]
        for (let j = 1; j < arrRes.length; j++) {
            if (arrRes[j][1] > max[1]) {
                max[1] = arrRes[j][1];
                max[0] = arrRes[j][0];
                del = j;
            }
        }
//    console.log(max);
        trueRes[i] = max[0];
        arrRes.splice(del, 1);
    }
    return trueRes;
}
console.log(top3(arr1, arr2));