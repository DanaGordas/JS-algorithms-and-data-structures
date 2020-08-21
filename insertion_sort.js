// SORTING ALGORITHMS

// write a function that takes an unsorted array
// and sorts it using the insertion sort algorithm

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([2,1,5,4,6,8,12,0]));
