let myString = "Hello, my name is Kevin.";
let myRegex = /Hello/;
//.test() is one way to test regular expressions in JS(to check a pattern exists within a string)
console.log(myRegex.test(myString)); //true
//but it's limitation is as seen below, it matches exactly if it didn't then it will be false
myRegex = /kevin/;
console.log(myRegex.test(myString)); //false
//to check multiple patterns using .test() method
let petString = "James has a pet cat.";
myRegex = /dog|cat|bird|fish/; // true only if one of these matching exists.
console.log(myRegex.test(petString));//true -> James has a pet cat.
//flags help regex to achieve different solutions.
//insensitive flag '/i' helps to ignore the UPPERCASE and lowercase matching
myRegex = /james/i;
console.log(myRegex.test(petString)); //true for all type of cases until it matches the spelling
//.match() is used to extract the matching string => stringToSearch.match(regex) extracts matching value
let extractStr = "Extract the word 'coding' from this string.";
myRegex = /coding/; 
console.log(extractStr.match(myRegex));
//global flag '/g' is used to search for a pattern more than once 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //we can combine more flags, here global and insensitive flags are used
console.log(twinkleStar.match(starRegex));// returns [ 'Twinkle', 'twinkle' ]
console.log(starRegex.test(twinkleStar)); //true
// '.' called as "dot" or "period", used as wildcard for one character in the regex
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; // can used for hum, hug, hut, huh
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr)); //both return true
/*match single character with multiple values, search for a literal pattern with some flexibility with 'character classes'. 
Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.*/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex)); //above returns values but this will be null as 'o' is not given in the character class
//character sets -> these are useful for seeing through range [a-e] a to e, [A-Z] A to Z
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex)); // will be  null as m is not in range of a-e
let jennyStr = "Jenny8675309";
myRegex = /[a-z0-9]/ig; //combined to use range of letters and numbers
console.log(jennyStr.match(myRegex));
//negated character sets can be formed by adding '^' after the opening bracket and before the characters we don't want
let quoteSample = "3 blind mice.";
myRegex = /[^aeiou0-9]/gi;
console.log(quoteSample.match(myRegex));
//Match character that occur one or more times by using '+' in regex -> /a+/g check for pattern a or aa
// abaab returns "a" and "aa", abab returns "a" and "a", bcd returns null
let difficultSpelling = "Mississippi";
myRegex = /s+/g;
console.log(difficultSpelling.match(myRegex)); // ss, ss
// for zero or more we use '*'
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex)); //goooooooo
console.log(gPhrase.match(goRegex)); //g
console.log(oPhrase.match(goRegex)); //null
/*greedy matching finds largest possible part of string -> /t[a-z]*i/ for titanic give "titani" however if we want a shortest string
* we can give lazy matching just by adding '?' -> /t[a-z]*?i/ for titanic give "ti"*/
//as seen '^' inside character class is used as negation,
//but if given outside of character class then it validates if it starts with the given pattern or not.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal)); //true
console.log(rickyAndCal.match(calRegex));
//to do a pattern search at end we use anchor character '$'
let theEnding = "This is a never ending story";
let noEnding = "Sometimes a story will have to end";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding)); //true - string ends with story
console.log(storyRegex.test(noEnding)); //false - string does not ends with story
//to match all numbers and letters -> we have shorthand for [A-Za-z0-9_] as \w
quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); //6 because of global flag, if g is removed then it wil be 1 since only "The" word will be the result
//the opposite for non finding alphanumerics is '\W' => [^A-Za-z0-9_] useful to search only special characters, whitespace
//shorthand for digits is '\d' => [0-9]
//similarly non-digits is '\D' => [^0-9] that includes letters, special characters, whitespace.
/*
    username check with following rules:
    1.Usernames can only use alpha-numeric characters.
    2.The only numbers in the username have to be at the end. There can be zero or more of them at the end.
    3.Username cannot start with the number.
    4.Username letters can be lowercase and uppercase.
    5.Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
// base solution -> /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
let username = "V00";
let userCheck = /^[a-z](\d{2,}|[a-z]+\d*)$/i; //'\d{2,}' - ends with two or more numbers
console.log(userCheck.test(username));
//'\s' can search for whitespace, carriage return, tab, form feed, new line characters. similar to [ \r\t\f\n\v]
//similarly '\S' can search for non-whitespace characters, above values => [^ \r\t\f\n\v]
/*quantity specifier - instead of '+' or '*' for multiple occurrence check
* use curly brackets to match a specific number of occurrences - {lower,upper}*/
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4)); //true
console.log(multipleA.test(A2)); //false
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; //matches for "Ohhh no" where h can be more than 3 and upto 6 characters.
console.log(ohRegex.test(ohStr)); // true
//when we want lower number of matches but no limit for upper number we can simply specify as '{lower,}'.
let A100 = "h" + "a".repeat(100) + "h";
multipleA = /ha{3,}h/;
console.log(multipleA.test(A4)); //true
console.log(multipleA.test(A2)); //false
console.log(multipleA.test(A100)); //true
//to specify exact number of matches just given number in b/w curly braces - '{exact}'
let exactA = /a{2}h/;
console.log(exactA.test(A2)); //true for only 'aah'
// check for zero or one (optional) - we can do it by using '?' useful to check american and british spellings
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american)); //true
console.log(rainbowRegex.test(british)); //true
/*
* Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
* This can be useful when you want to search for multiple patterns over the same string - positive lookahead and negative lookahead.
* positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
* positive lookahead is used as (?=...) where the ... is the required part that is not matched.
* negative lookahead will look to make sure the element in the search pattern is not there.
* negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
* The rest of the pattern is returned if the negative lookahead part is not present.
*/
let quit = "quit";
let noquit = "qit";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex)); //returns ['q']
console.log(noquit.match(qRegex)); //returns ['q']
//simple password checker that looks for between 3 and 6 characters and at least one number
let password = "abc 1ab";
let checkPass = /(?=\w{3,6})(?=\d)/;
console.log(checkPass.test(password)); //true
console.log(password.match(checkPass)); // return ''
//'(?=\w{6})(?=\w*\d{2})' check for word of length 6 and at least 2 consecutive numbers
// grouping - we use parenthesis to have group of searches
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr)); //true for Penguin or Pumpkin
/*
* capture groups - enclose regex pattern in parenthesis then use it again by saving into temporary variable '\1'
* Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
* Using the .match() method on a string will return an array with the matched substring, along with its captured groups.
*/
let repeatStr = "row row row";
let repeatRegex = /(\w+) \1 \1/;
console.log(repeatRegex.test(repeatStr)); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"] 
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
console.log(reRegex.test(repeatNum)); //only true for repeated number thrice like '42 42 42'
//if '^' or '$' is removed then it can work for multiple number of repetitions like '42 42 42 42'
/*
* we can search and replace text in a string using .replace() on a string.
* The inputs for .replace() is regex pattern you want to search for and second one is the string to replace the match or a function to do something.
*/
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue")); //returns string "The sky is blue"
//works with capture groups, below can replace first and seconds strings
console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')); // returns "Camp Code"
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
console.log(str.replace(fixRegex, replaceText)); //returns "three two one"
//removing whitespace at both ends - can also be achieved by using "String.prototype.trim()"
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // g allows us to do multiple search here other wise only either whitespace at first or end is removed
console.log(hello.replace(wsRegex,"")); // returns "Hello, World!"