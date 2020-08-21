// SEARCHING ALGORITHMS

// write a function which accepts an array and a value
// and returns the index at which the value exists
// if the value does not exist, return -1

function linearSearch(arr, val) {
//    return arr.indexOf(val);

   for(let i = 0; i < arr.length; i++) {
       if(arr[i] === val) {
           return i;
       }
   } return -1;
}

console.log(linearSearch([2,4,5,6,7,8], 2)); // 0
console.log(linearSearch([2,4,5,6,7,8], 9)); // -1
