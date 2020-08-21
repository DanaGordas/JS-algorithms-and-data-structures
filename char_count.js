// Problem solving and refactoring intro:

// Write a function which takes in a string and returns counts of each character in the string.

// charCount('aaaaa');
/* {
    a: 4
} */

// charCount('hello');
/* {
    a: 1,
    e: 1,
    l: 2,
    o: 1
} */

// charCount('Your PIN number is 1234');
/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    y: 1,
    o: 1,
    u: 2,
    r: 2,
    p: 1,
    i: 2,
    n: 2,
    m: 1,
    b: 1,
    e: 1,
    s: 1
} */

// function charCount(str) {
//     // make object to return at end
//     const result = {};
//     // loop over string, for each character...
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if(result[char] > 0) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         }
//     }
//         // if the char is a letter/number and is a key in the object, add 1 to count
//         // if the char is a letter/number and is not a key in the object, add it to object and set value to 1
//         // if the char is something else (space, period etc.) don't do anything
//    // return object
//    return result;
// }


// the full working solution:

// function charCount(str) {
//     const obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if(obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }

// the refactored solution

function charCount(str) {
    const obj = {};
    for (let char of str ) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // 0-9
       !(code > 64 && code < 91) && // A-Z
       !(code > 96 && code < 123)) {  // a-z
           return false;
       } else {
           return true;
       }
}

// You can address the fact that regex is sometimes not the best solution when it comes to efficiency.
// This might not be the best way to check if something is a letter or number
// Using character code is actually more efficient
