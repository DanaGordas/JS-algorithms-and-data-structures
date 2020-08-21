// RECURSION

// write a function which accepts a base and an exponent
// the function should return the power of the base to the exponent

function power(base, exp) {
    if(exp === 0) return 1;
    return base * power(base, (exp - 1));
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16


// write a function which takes an array of numbers and returns the product of them

function productOfArray(arr) {

    let total = 1;

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

      total *= helperInput[0];

      helper(helperInput.slice(1));
    }

    helper(arr);
    return total;
}


console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60


// write a function which accepts a number
// and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num){
    if (num === 1) return 1; // base case
    return num + recursiveRange(num-1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// write a recursive function that accepts a number and returns the nth
// number of the Fibonacci sequence
// reminder: the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8
// which starts with 1 and 1 and where every number after
// is equal to the sum of the previous two numbers

function fib(n){
  if(n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
