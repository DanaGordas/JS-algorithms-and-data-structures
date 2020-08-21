// RECURSION

// write a function that takes a number and prints
// all the numbers counting down from that number until 0

// code without recursion:

// function countDown(num) {
//     for(let i = 0; i <= num; i++) {
//         console.log(i);
//     }
//     console.log("All done!");
// }

function countDown(num) {
  if(num <= 0) {                 // base case
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
