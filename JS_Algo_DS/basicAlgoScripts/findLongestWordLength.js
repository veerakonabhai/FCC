/* Return the length of the longest word in the provided sentence. */

function findLongestWordLength(str) {
    // nice for loop to check each elements length
    /* let strArray = str.split(" ");
    let maxLength = 0;
    for (let i = 0; i < strArray.length; i++) {
        if(strArray[i].length > maxLength){
            maxLength = strArray[i].length;
        }
    }
    return maxLength; */

    //using reduce() method, 0 sets as initial value for longest variable
    /* return str
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0); */

    /* using recursion, The first line splits the string into individual words.
    Then we check if words only has 1 element left. If so, then that is the longest element and we return it.
    Otherwise, we remove the first element and recursively call the function findLongestWord,
    returning the maximum between the length of the first result and the recursive call . */
    const words = str.split(" ");
    if (words.length == 1) {
        return words[0].length;
    }
    return Math.max(
        words[0].length,
        findLongestWordLength(words.slice(1).join(" "))
    );
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); //19