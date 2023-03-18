/* Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case. */

function titleCase(str) {
    //split into array and, convert the first char to uppercase and then remaining to lowercase
    /* let strArr = str.split(" ");
    let newStr = [];
    for(let st in strArr){
        newStr[st] = strArr[st][0].toUpperCase() + strArr[st].slice(1).toLowerCase();
    }
    return newStr.join(" "); */

    //using map() and replace
    // return str.toLowerCase().split(" ").map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(" ");

    //using regex
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

}

console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); //Short And Stout