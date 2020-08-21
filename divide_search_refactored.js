// SEARCHING ALGORITHMS

// given a sorted array of integers
// write a function search that accepts a value and returns
// the index where the value passed to the function is located
// if the value is not found, return -1

// solution using divid and conquer binary search method

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4)) // 3
console.log(search([1,2,3,4,5,6], 6)) // 5
console.log(search([1,2,3,4,5,6], 7)) // -1


// This is actually O(1) because we don't need to iterate through the whole array
