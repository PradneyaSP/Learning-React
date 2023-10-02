//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

const fname = "Pradneya";
const lname = "Prabhudesai";
const currDate = new Date();
const year = currDate.getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
