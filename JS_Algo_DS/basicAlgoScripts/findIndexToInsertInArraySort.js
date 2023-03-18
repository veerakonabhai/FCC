/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number. */

function getIndexToIns(arr, num) {
    //sort and use for loop to find the position 
    /* arr.sort((a, b) => a - b); //arr.sort() can fail for numbers if comparison is not given - [10, 2, 20] will be returned
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length; */

    //add element then sort and find index
    // return arr.concat(num).sort((a, b) => a - b).indexOf(num);

    //filter the values that are less than the num and send the count
    return arr.filter(val => num > val).length;
}

console.log(getIndexToIns([40, 60], 50)); //1
console.log(getIndexToIns([2, 20, 10], 19)); //2