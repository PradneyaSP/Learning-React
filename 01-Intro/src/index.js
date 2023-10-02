import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Helloooooo</h1>, document.getElementById("root"));

//Similar can be achieved with 👇
var h1 = document.createElement("h1");
h1.innerHTML = "Helloooooo";
document.getElementById("root").appendChild(h1);

//To renter multiple HTML elements 👇
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>My name is Pradneya</p>
  </div>,
  document.getElementById("root")
);
