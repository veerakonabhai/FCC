/* Convert a given celsius degree into fahrenheit degree measurement */

function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

console.log(convertCtoF(30)); //86