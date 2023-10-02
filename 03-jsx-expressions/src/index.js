import React from "react";
import ReactDOM from "react-dom";

const name = "Pradneya";
const n = Math.floor(Math.random() * 8);
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is : {n}</p>
  </div>,
  document.getElementById("root")
);
