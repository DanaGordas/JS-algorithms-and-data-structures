// SORTING ALGORITHMS

// define a function bubbleSort that takes in an array of numbers
// start looping with a variable called i
// an inner loop j from the beginning until i -1
// then we compare array[j]

// not optimized longer bubble sort function
// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([3,1,9,19,12,4])); // [1,3,4,9,12,19]

// better solution since it reduces the number of comparisons

// function bubbleSort(arr) {
//     for(let i = arr.length; i >= 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([3,1,9,19,12,4])); // [1,3,4,9,12,19]

// ES2015 solution
// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }

//     for(let i = arr.length; i >= 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([3,1,9,19,12,4, -2, -20, 88])); // [1,3,4,9,12,19]


// optimized solution that stops when we are not making any swaps anymore

function bubbleSort(arr) {
    let noSwaps;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = arr.length; i >= 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8,1,2,3,4,5])); // [1,2,3,4,5,8]
