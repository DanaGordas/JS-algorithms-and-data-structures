// MULTIPLE POINTERS PROBLEM SOLVING PATTERN

// implement a function which accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed


function areThereDuplicates() {
    let left = 0;
    let right = arguments.length - 1;
    while(left < right) {
        if(arguments[left] === arguments[right]) {
            return true;
        } else {
            left++;
        }
    }
    return false;
}

// one liner solution
// function areThereDuplicates() {
//  return new Set(arguments).size !== arguments.length;
// }

// TEST

console.log(areThereDuplicates(1, 3, 3)); // true
console.log(areThereDuplicates("a", "b", "c", "d")); // false
console.log(areThereDuplicates(2, 2, 3, 4, 5)); // true
