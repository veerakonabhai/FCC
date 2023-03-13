/* find the factorial of given positive number 0! = 1, 1! =1 */

function factorialize(num) {
    //brute force using for loop
    //setting temp to 1 helps with case where number is '0' as the for loop is not executed in that case and we return temp as 1 which is true
    /* let temp = 1;
    for (let i = num; i >= 1; i--) {
        temp *= i;
    }
    return temp; */

    //recursion method
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

// tail recursion to optimize memory usage
/* In traditional head recursion, the typical model is that you perform your recursive calls first,
and then you take the return value of the recursive call and calculate the result. 
In this manner, you don’t get the result of your calculation until you have returned from every recursive call. */
/* In tail recursion, you perform your calculations first, and then you execute the recursive call,
passing the results of your current step to the next recursive step.
This results in the last statement being in the form of (return (recursive-function params)) */
/* 
function factorialize(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
} */
console.log(factorialize(5)); //120
console.log(factorialize(0)); //1
console.log(factorialize(20)); //2432902008176640000