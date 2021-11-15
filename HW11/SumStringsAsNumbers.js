// Given the string representations of two integers, return the string representation 
// of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten 
// numerals "0" to "9".

function sumStrings(a,b) { 
    let maxL = 0;
    let minL = 0;
    if (a.length > b.length) {
      maxL = a.length;
      minL = b.length;
    } else {
      maxL = b.length;
      minL = a.length;
    }
    if (maxL < 14) {
      return ((a / 1) + (b / 1)).toString();
      } else {
          const arrA = a.split("");
          const arrB = b.split("");
          //console.log(maxL);
          arrA.reverse();
          arrB.reverse();
          const res = [];
          let flag = false;
          for (let i = 0; i < minL; i++) {
             let sum = arrA[i] / 1 + arrB[i] / 1;
             if (flag) {
               sum++;
             }
             if (sum >= 10) {
               flag = true;
               sum = sum - 10;
             } else {
               flag = false;
             } 
              res.unshift("" + sum);
            }
          if (a.length == b.length) {
            if (flag) {
              res.unshift("1");
              flag = false;
          }} else {
                  for (let i = minL; i < maxL; i++) {
                  if (a.length > b.length) {
                    if (flag) {
                      res.unshift("" + (1 + (arrA[i] / 1)));
                      flag = false;
                      } else {
                        res.unshift(arrA[i]);
                      }
                  } else if (b.length > a.length) {
                    if (flag) {
                      res.unshift("" + (1 + (arrB[i] / 1)));
                      flag = false;
                      } else {
                        res.unshift(arrB[i]);
                      }
                  }
                  }
          }
          let result = res.join("");
        if (result.charAt(0) == "0") {
          result = result.splice(1);
        } 
        return result;
    }
}
console.log(sumStrings('123','456'));
console.log(sumStrings('12213232132132133','45123212132132132136'));
console.log(sumStrings('12234234231213423142423442134234324234234234234214342342343','456'));