// SEARCHING ALGORITHMS

// write a function binarySearch that accepts a sorted array and a value
// you need to create 2 variables, pointers: one that points at the
// left side and one at the right side
// loop until left pointer comes before right pointer
// create a pointer in the middle
// if you find the value you want, return the index
// if the value is too small move the left pointer up
// if the value is too big move the right pointer down
// if you never find the value just return -1

function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
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
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,], 6)); // 5
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,], 1)); // 0
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,], 11)); // -1
