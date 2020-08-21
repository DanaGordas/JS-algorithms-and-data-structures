// SORTING ALGORITHMS

// create a function called slectionSort that takes an array
// store the first element as the smallest element you've seen so far
// compare this item to the next item in the array
// if this item is smaller then we update the value of the smallest element
// if it's not smaller then we keep going
// if at some point we find another value that is smaller than the min then we update that


// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let min = i;
//         for(j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if(i < min) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }


// ES2015 version with a separate swap function


function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) swap(arr, i, min);
    }
    return arr;
}


console.log(selectionSort([3,1,9,19,-10,12,4])); // [-10,1,3,4,9,12,19]
