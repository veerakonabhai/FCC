/* Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array. */

function mutation(arr) {
    //using for loop and indexOf to check each character
    /* let str1 = arr[0].toLowerCase(), str2 = arr[1].toLowerCase();
    for (const key in str2) {
        if(str1.indexOf(str2[key]) < 0) return false;
    }
    return true; */

    //using split() and every()
    /* return arr[1].toLowerCase().split('')
        .every(letter => { return arr[0].toLowerCase().indexOf(letter) !== -1; }); */

    //using recursion, here we added another function at bottom
    return recursionMutation(arr, 0);

}

function recursionMutation(arr, i) {
    let str1 = arr[0].toLowerCase(), str2 = arr[1].toLowerCase();
    return i >= str2.length
        ? true
        : !str1.includes(str2[i])
            ? false
            : recursionMutation(arr, i + 1);
}


console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["Alien", "line"])); //true
console.log(mutation(["Mary", "Aarmy"])); //true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true