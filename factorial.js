// RECURSION

// write a function that takes a number
// and multiplies all the numbers from that number down to 1


// code without recursion

// function factorial(num) {
//     let total = 1;
//     for(let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// }

//  console.log(factorial(4));

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(6));
