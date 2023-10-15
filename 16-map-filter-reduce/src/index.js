// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// let newNumbers = numbers.map(function (n) {
//   return n * 2;
// });
// console.log(newNumbers);

/*
  We can do the same by 👇
  let newNumbers =[];
  numbers.forEach(function(n){
    newNumbers.push(n*3);
  })

  OR 

  for(const n of numbers){
  newNumbers.push(n*2);
  }
  console.log(newNumbers);
*/

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (n) {
//   return n < 10;
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// const sum = numbers.reduce(function (accumulator, n) {
//   return (accumulator += n);
// });

// console.log(sum);

//Find - find the first item that matches from an array.

// const n = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(n);

//FindIndex - find the index of the first item that matches.
// const n = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(n);

import emojipedia from "./emojipedia";

var newMeanings = emojipedia.map(function (emojiText) {
  return emojiText.meaning.slice(0, 100);
});

console.log(newMeanings.slice());
