/* reverse a given string */

function reverseString(str) {

    //brute force method using classical for loop
    /* let reversedStr = "";
    for (let i = str.length - 1; i = 0; i--) {
        reverseString += str[i];
    }
    return reversedStr; */

    /* using built-in methods split(), reverse(), join() - split("") turns string to character array,
    reverse() reverses a given array, join("") converts the array to string */
    return str.split("").reverse().join("");
}

console.log(reverseString("hello world")); //dlrow olleh