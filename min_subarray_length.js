// SLIDING WINDOW PROBLEM SOLVING PATTERN

// write a function minSubArrayLen which takes an array of positive integers and an integer as parameters
// the function should return the minimal length of a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function
// if there isn't one return 0

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3]), 7); // 2 because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4]), 9); // 2 because [5,4] is the smallest subarray
console.log(minSubArrayLen([2,70,6,5,4]), 62); // 1 because [70] is the smalest subarray
console.log(minSubArrayLen([2,30,6,5,4]), 92); // 0 because there is no array bigger or equal to num
