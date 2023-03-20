/* JS allows us to work with primitives like Numbers and Strings like Objects (primitives are not Objects by the way),
primitives are 7 types - "string", "number", "bigint", "boolean", "symbol", "null" and "undefined".
object is capable of storing multiple values as properties. even function can be stored as property in object
 */
let john = {
    name: "John",
    sayHi: function () {
        // alert("Hi buddy!");
        console.log("Hi there");
    }
};
john.sayHi(); // Hi there
/* JS allows access to methods and properties of strings, numbers, booleans and symbols, In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.
The “object wrappers” are different for each primitive type and are called: "String", "Number", "Boolean", "Symbol" and "BigInt". Thus, they provide different sets of methods */
//new Number("1234") also works for below line but it will create an object, that may not be working as expected when checking truth statements
let num = Number("1234"); //convert other types to number
console.log(num); //1234
/* The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”. */


/* NUMBERS */
/* Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time
BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)
 */
let billion = 1000000000;
billion = 1_000_000_000;
console.log(billion); //1000000000
billion = 1e9; //we can shorten a number by appending the letter "e" to it and specifying the zeroes count
console.log(billion); //1000000000
console.log(1.23e6) //1230000 -> 1.23*1000000
console.log(1e-6); //0.000001 -> 1/1000000 -> e- will add zero after the decimal point that is divide by that number of zeros
//other formats are hexadecimal, binary and octal forms - below are representation of 255 in all three
console.log(0xff); //255, 0x -> hexadecimal it can also be 0xFF
console.log(0b11111111); //255, 0b -> for binary
console.log(0o377); // 255, 0o -> for octal