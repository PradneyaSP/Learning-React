import React from "react";

function Heading() {
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
    greeting = "Night";
    greetingColor.color = "blue";
  }

  return (
    <h1 className="heading" style={greetingColor}>
      Good {greeting}
    </h1>
  );
}

export default Heading;
