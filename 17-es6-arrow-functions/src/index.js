import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => {
  return x * 2;
});

console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter((num) => num < 10);
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
var sum = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(sum);

////Find - find the first item that matches from an array.
const firstNumber = numbers.find((num) => num > 10);
console.log(firstNumber);

////FindIndex - find the index of the first item that matches.
const firstIndex = numbers.findIndex((num) => {
  return num > 10;
});
console.log(firstIndex);
