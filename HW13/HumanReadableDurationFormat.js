// Your task in order to complete this Kata is to write a function which formats a 
// duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes 
// and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, 
// a positive integer and one of the valid units of time, separated by a space. The unit 
// of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, 
// which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. 
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like
// in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 
// 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should
// not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration 
// specified by of a component must not be greater than any valid more significant unit 
// of time.

function formatDuration (seconds) {
    if (! seconds >= 1) {
      return "now";
    }
     const resArr = [];
      resArr[0] = Math.floor(seconds / 31556952);
      seconds = seconds % 31556952;
      resArr[1] = Math.floor(seconds / 86400);
      seconds = seconds % 86400;
      resArr[2] = Math.floor(seconds / 3600);
      seconds = seconds % 3600;
      resArr[3] = Math.floor(seconds / 60);
      resArr[4] = seconds % 60;
     let counter = 0;
    for (let i = 0; i < 5; i++) {
      if (resArr[i] != 0) {
        counter ++;
      }
    }
    const strArr = [];
    if (resArr[0] > 1) {
      strArr[0] = resArr[0] + " years";
    } else if (resArr[0] == 1) {
      strArr[0] = "1 year";
    }
    if (resArr[1] > 1) {
      strArr[1] = resArr[1] + " days";
    } else if (resArr[1] == 1) {
      strArr[1] = "1 day";
    }
    if (resArr[2] > 1) {
      strArr[2] = resArr[2] + " hours";
    } else if (resArr[2] == 1) {
      strArr[2] = "1 hour";
    }
    if (resArr[3] > 1) {
      strArr[3] = resArr[3] + " minutes";
    } else if (resArr[3] == 1) {
      strArr[3] = "1 minute";
    }
    if (resArr[4] > 1) {
      strArr[4] = resArr[4] + " seconds";
    } else if (resArr[4] == 1) {
      strArr[4] = "1 second";
    }
    let res = "";
    for (let i = 0; i < 5; i++) {
      if (counter > 2 && resArr[i] != 0) {
        res = res + strArr[i] + ", "
        counter--;
        continue;
      }
      if (counter == 2 && resArr[i] != 0) {
        res = res + strArr[i] + " and ";
        counter --;
        continue;
      }
      if (counter == 1 && resArr[i] != 0) {
        res = res + strArr[i];
        counter--;
        continue;
      }
    }
    return res;
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(3231232662));
console.log(formatDuration(3662322));
console.log(formatDuration(3661242));
console.log(formatDuration(3661200));
console.log(formatDuration(2851242));