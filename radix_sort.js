// SORTING ALGORITHMS

// implement helper methods

// This method will give us the number that we find at a given index from right to left (0 is the right most number)
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// TEST
// console.log(getDigit(7323, 5)); //3

// This method will tell us how many digits a number has

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// TEST
// console.log(digitCount(343)); // 3
// console.log(digitCount(3)); // 1
// console.log(digitCount(0)); // 1
// console.log(digitCount(34243654647)); // 11

// This method will use digitCount defined above and return the highest number of digits of the numbers
// passed to mostDigits

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// TEST
// console.log(mostDigits([1234,6,7,54,23413,654,76]));

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([1234,6,7,54,23413,654756789,76]));
