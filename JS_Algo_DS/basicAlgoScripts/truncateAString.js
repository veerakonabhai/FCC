/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending. */

function truncateString(str, num) {
    // using string slice method
    /* if(num < str.length){
        return str.slice(0,num) + "...";
    }
    return str; */

    //above code reduced to one line
    return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));