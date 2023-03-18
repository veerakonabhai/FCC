/* Create a function that looks through an array and returns the first element in it that passes a 'truth test'.
This means that given an element x, the 'truth test' is passed if func(x) is true.
If no element passes the test, return undefined. */

function findElement(arr, func) {
    // brute force using for loops to check the elements
    /* let elem = 0;
    for (let i = 0; i < arr.length; i++) {
        elem = arr[i];
        if (func(elem)) {
            return elem;
        }
    }
    return undefined; */

    //using find() on arrays
    /* return arr.find(func); */

    /* using map() method - use the function in the 2nd parameter as the callback function in arr.map()
    acquire the index of the first number that meets the condition in the function.
    use that index to display the first available number that meets the condition. */
    /* return arr[arr.map(func).indexOf(true)]; */

    //recursion
    if (arr.length > 0 && !func(arr[0])) {
        return findElement(arr.slice(1), func);
    } else {
        return arr[0];
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); //2
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)); //8
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0)); //undefined