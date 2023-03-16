/* Return array of Largest Numbers from each of given Arrays */

function largestOfFour(arr) {
    //brute force method of using 2 for loops
    /* let maxVal = [];
    for (let i = 0; i < arr.length; i++) {
        maxVal[i] = arr[i][0]; //add first element of sub array to start comparison
        for (let j = 0; j < arr[i].length; j++) {
            if( arr[i][j] > maxVal[i]){
                maxVal[i] = arr[i][j];
            }
        }
    }
    return maxVal; */

    //map() to return new array of results, reduce() to reduce its contents down to a single value by callback function
    return arr.map(function (group) {
        // callback function passed here takes the previous value and the current value and compares the two values
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[ 5, 27, 39, 1001 ]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); //[ 25, 48, 21, -3 ]