/* split an array (first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    //using splice() method
    /* const newArr = [];
    for (let i = 0; i < arr.length; i+size) {
        newArr.push(arr.splice(0, size));
    }
    return newArr; */

    //using slice() method
    /* const newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr; */

    //using recursion
    if (arr.length <= size) {
        return [arr]; // helps in creating a 2 dimensional array
    } else {
        return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
    }
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //[[0, 1, 2, 3], [4, 5]]