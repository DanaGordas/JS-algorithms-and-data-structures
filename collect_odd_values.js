// RECURSION

// write a function that accepts an array and returns
// a collection of all the odd values in that array


// Helper method solution

function collectOdds(nums) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) return;

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1))
    }
    helper(nums);
    return result;
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9,10]));

// Pure solution

function collectOddValues(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5]));

// what happens in lines 12 and 13
// [1].concat(collectOddValues([2,3,4,5]))
               // [].concat(collectOddValues([3,4,5]))
                           // [3].concat(collectOddValues([4,5]))
                                          // [].concat(collectOddValues([5]))
                                                    // [5].concat(collectOddValues([]))
                                                            // [] this is where we reach the break condition and start concatenating the results
