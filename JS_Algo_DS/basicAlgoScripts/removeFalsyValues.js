/* Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
    //create temp array and add true values into it
    /* let newArr = [];
    for(let i in arr){
        if(arr[i]) newArr.push(arr[i]);
    }
    return newArr; */

    //using filter() option array
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9])); //[7, "ate", 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); //[]