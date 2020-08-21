// MULTIPLE POINTERS PROBLEM SOLVING PATTERN

// write a function called averagePair
// given a sorted array of integers and a target average
// determine if there is a pair of values in the array where the average equals the target average

function averagePair(arr, val) {
    if(arr.length < 1) return false;

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if(avg === val) {
            return true;
        } else if (avg > val) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(averagePair([1,2,3], 2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([], 4)); // false
