// SORTING ALGORITHMS

// sorting numbers by ascending or descending order
// for descending we can change num2 - num1

function numberCompare(num1, num2) {
    return num1 - num2;
}

console.log([2,1,6,7,23,12,9].sort(numberCompare));


// sorting strings by length

function compareByLength(str1, str2) {
    return str1.length - str2.length;
}

console.log(["Colt", "Data Structures", "Algorithms", "Steele"].sort(compareByLength));

