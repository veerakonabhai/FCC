/* Debugging is the process of going through your code, finding any issues, and fixing them. */
/* we use Developer tools of browsers to debug the JS in web-pages */
// console.log() - prints the value within the parenthesis to console
let a = 5;
console.log(a); //5
// other methods to use with "console" to output messages are like - "log", "warn", "clear", ....
/* console.clear(); - clears the browser console */
// we can use "typeof" to check the data structure, or type, of a variable
/* JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, 
String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object.
Note: arrays are technically a type of object */
console.log(typeof ""); //string
console.log(typeof 0); //number
console.log(typeof []); //object
console.log(typeof {}); //object
/* "Syntax" type errors are displayed on the console, common ype are reference error usually caused 
by missing or mis-typed  variable or function name*/
/* let correctVar = "some value";
console.log(corectVar); // ReferenceError: corectVar is not defined */
/* Another syntax error to be aware of is that all opening parentheses, brackets, curly braces,
and quotes have a closing pair, add the pair immediately after adding the first one */
// Another common error is with 'equality operator'("==" or "===" strict equal) and 'assignment operator'("=")
/* Prevent Infinite Loops with a Valid Terminal Condition */