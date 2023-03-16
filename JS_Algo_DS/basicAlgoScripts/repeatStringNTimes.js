/* Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number */

function repeatStringNumTimes(str, num) {
    // brute force - using for loop
    /* let resStr = '';
    if(num > 0 ){
        for (let i = 0; i < num; i++) {
            resStr += str;
        }
    }
    return resStr; */

    //recursion
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
    //above can be reduce to one line
    /* return num > 0 ? str + repeatStringNumTimes(str, num - 1) : ''; */
}

console.log(repeatStringNumTimes("abc", 3)); //abcabcabc
console.log(repeatStringNumTimes("something", -1)); //