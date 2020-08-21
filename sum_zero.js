// MULTIPLE POINTERS PROBLEM SOLVING PATTERN

// write a function which accepts a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to zero
// or undefined if a pair doesn't exist

// NAIVE SOLUTION

function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));

// quadratic time complexity O(n2)
// space complexity O(1)


// REFACTORED SOLUTION

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));

// time complexity is liniar O(N)
// space complexity is O(1)
