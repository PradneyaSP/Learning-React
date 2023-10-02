//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currDate = new Date();
const currTime = currDate.getHours();
var greeting = "";
var greetingColor = {
  color: "black"
};
if (currTime < 12) {
  greeting = "Morning";
  greetingColor.color = "red";
} else if (currTime <= 18) {
  greeting = "Afternoon";
  greetingColor.color = "green";
} else {
  greeting = "Evening";
  greetingColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={greetingColor}>
    Good {greeting}
  </h1>,
  document.getElementById("root")
);
