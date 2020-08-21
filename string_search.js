// SEARCHING ALGORITHMS

// define a function called stringSearch that takes 2 strings, the larger and the pattern
// loop over the bigger string. if the characters don't match, break out of the inner loop
// if the characters match, keep going
// if you complete the inner loop and find a match then increment the counter by 1

function stringSearch(long, short) {
    let counter = 0;

    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) counter++;
        }
    }
    return counter;
}


console.log(stringSearch("iamnotyourdaddy", "dad")); // 1
console.log(stringSearch("bestboyever", "not")); // 0
console.log(stringSearch("blablacar", "bla")); // 2
