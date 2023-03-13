/** ARRAY's **/
/* they are used to store/retrieve a collection of Data. simple one is a 'one-dimensional' array
it can contain booleans, strings, and numbers, among other valid JavaScript data types,
They are mutable that is elements can be added or removed over time" */
let myArray = ["some string", 46, true, { 11: 22 }, ["another", "array"]];
// 'length' is a property of Array and can be accessed as "Array.length"
console.log(myArray.length); //5
// we can retrieve data using bracket notation which takes index of element we want to access (zero indexed)
myArray[0] = 'some other string' // this sets the value at index 0 from "some string" to "some other string"
/* "Array.push()" and "Array.unshift()" are methods help in adding element into an Array,
push() adds element at the end of Array and unshift() adds a the beginning of it */
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); //[ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]
/* "pop()" & "shift()" helps in removing an element from the end and start of Array respectively */
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete'])); //[ 2, 5, 2, 1 ]
/* splice() takes up to 3 parameters, first 2 params are integers which represents index/position and number of elements to delete
this method modifies the array that is called and returns a new array formed from removed elements */
const spliceArr = [2, 4, 5, 1, 7, 5, 2, 1];
spliceArr.splice(1, 4) // remove some elements from array such that new array contains values that sums to "10"
console.log(spliceArr); //[ 2, 5, 2, 1 ]
/* when a 3rd param(comprised of one or more elements) is passed then they are added form the index of removed element */
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//[ 'DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick' ]
/* slice(begin, stop) is a method that helps in extracting a subarray starting form 'begin' index and upto 'stop' index
element at stop index is not included, new array of extracted values is returned and the array on which it is applied is untouched */
function forecast(arr) {
    return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); //[ 'warm', 'sunny' ]
/* ES6's new spread operator("...") allows us to easily copy all of an array's elements - similar as splice(0, arr.length) */
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]); //spread the array elements and add them to newArr as many times as given num value
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2)); //[ [ true, false, true ], [ true, false, true ] ]
// Another huge advantage of this spread operator is it's ability to combine arrays(insert all elements of one array into another one in the existing form)
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut()); //[ 'learning', 'to', 'code', 'is', 'fun' ]
/* since array's can be changed/mutated it's harder to keep track of elements position or being removed/replaced
JS has an inbuilt function tha can help with finding the presence of an element using "indexOf()" returns '-1' if element is not there. */
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf('dates')); //"-1" as dates is not a valid value in above array
console.log(fruits.indexOf('oranges')); //2
/* Iteration methods on arrays */
// every(), forEach(), map(), etc. are some builtin methods of JS which are slightly different from each other in giving the results
// simple 'for' loop is usually used for more control and flexible
function filteredArray(arr, elem) { //arr is a nested array on which we apply filter to check the 'elem'
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) { //check for 'elem', if it is not there then that nested array is filtered
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [2, 13, 26], [19, 3, 9]], 3)); //[ [ 2, 13, 26 ] ]
/* Multi-dimensional arrays or Nested arrays */
let myNestedArray = [
    'level 1',                   /* myNestedArray[0]             */
    ['level 2'],	             /* myNestedArray[1][0]          */
    [['level 3', 'deep']],	     /* myNestedArray[2][0][0]       */
    [[['level 4', 'deeper']]],   /* myNestedArray[3][0][0][0]    */
    [[[['level 5', 'deepest']]]] /* myNestedArray[4][0][0][0][0] */
];

/* OBJECT's */
/* objects are collection of key-value pairs(data is mapped to it's unique identifier) and can be accessed using Dot notation(.) or bracket notation([])
bracket notation is very useful if the key is string and has space, it needs quotes('' or "") like ```obj['keyWith space'] = "some value";``` 
and this notation can also be used if key is stored in some other variable */
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.bananas = 13;
foods["water melon"] = 35;
let berries = 'strawberries';
foods[berries] = 27;
console.log(foods);
/* 
{
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  'water melon': 35,
  strawberries: 27
} */
// Nested objects - we can have any depth of objects or other data types nested in an object and can be accessed with Dot or Bracket notation 
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);
/*
{
  id: 23894201352,
  date: 'January 1, 2017',
  data: { totalUsers: 51, online: 45 }
} */
// bracket notation is helpful when sometimes object properties are not known before runtime or we need to access them in a more dynamic way
foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("apples")); //25
/* Deleting an object property - we use ```delete object.property``` */
delete foods.strawberries;
console.log(foods); //{ apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35 }
// checking a property is present or not in given object - can be accomplished by using "hasOwnProperty()" method or "in" keyword both return "true" if property is present
console.log(foods.hasOwnProperty("apples")); //true
console.log('plums' in foods); //true
/* for...in statement - helps in iterating through all keys within an object */
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function countOnline(usersObj) { // function to determine number of users online using for...in loop for users object
    let count = 0;
    for (let user in usersObj) { // 'user' is a temporary variable used as reference for an element key while iterating through the main object
        // use bracket notation as the 'user' has a dynamic value assigned to it, but 'online' is existing property so we can use either dot or bracket notation
        if (usersObj[user].online == true) { count++ };
    }
    return count;
}
console.log(countOnline(users)); //2
/* Object.keys(obj) method helps in getting all the keys in an obj using the 'Object' class - returns array with the keys object passed in parameter */
console.log(Object.keys(users)); //[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]