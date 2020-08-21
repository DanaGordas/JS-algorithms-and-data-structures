// SORTING ALGORITHMS

// write a function that given an array this function should designate an element as the pivot
// it should re-arrange the elements in the array so that all values less than the pivot are moved
// to the left of the pivot and all values greater than the pivot are moved to the right of the array
// it should do it in place, so not make a new array
// it should return the index of the pivot
// for simplicity the pivot will be the first element

// pivot helper function that will be used in the quick sort function

function pivot(arr, start=0, end=arr.length+1 ) {

    function swap(array, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

// define the quick sort function that will call the pivot function above

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

// TEST
console.log(quickSort([5,2,1,8,4,7,6,3]));
console.log(quickSort([7,-10,45,32,12,200,-89,5.4]));
