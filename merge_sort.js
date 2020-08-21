// SORTING ALGORITHMS

// write a function that merges 2 sorted arrays

function merge(arr1, arr2) {
    let new_arr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            new_arr.push(arr1[i]);
            i++;
        } else {
           new_arr.push(arr2[j]);
           j++;
        }
    }

    while(i < arr1.length) {
        new_arr.push(arr1[i]);
        i++;
    }

     while(j < arr2.length) {
        new_arr.push(arr2[j]);
        j++;
    }

    return new_arr;
}

// merge sort algorithm using recursion

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1,3,0,-7,98,82,12]));

