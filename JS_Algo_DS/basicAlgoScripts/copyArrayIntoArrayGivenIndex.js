/* Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    // using temp value to store the copied array and then use splice to insert the first array
    /* let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr; */

    //without using a temp value
    return [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); //[ 4, 1, 2, 3, 5, 6 ]
console.log(frankenSplice([1, 2, 3, 4], [], 0)); //[ 1, 2, 3, 4 ]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //[ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]