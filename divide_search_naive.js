// SEARCHING ALGORITHMS

// given a sorted array of integers
// write a function search that accepts a value and returns
// the index where the value passed to the function is located
// if the value is not found, return -1

function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4)) // 3
console.log(search([1,2,3,4,5,6], 6)) // 5
console.log(search([1,2,3,4,5,6], 7)) // -1


// This naive approach is O(N) because we go through the entire array one time
