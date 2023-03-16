/* Check if a string (first argument, str) ends with the given target string (second argument, target). */
function confirmEnding(str, target) {
    //using Regular expression - '$' helps in checking the pattern at end 
    /* let endRegex = new RegExp(target+'$');
    return endRegex.test(str); */

    //using splice method - cut the string for given target length and see if it is same as target
    /* return str.slice(-target.length) === target */
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n")); //true
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //false