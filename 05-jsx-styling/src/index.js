import React from "react";
import ReactDOM from "react-dom";
/*
You can use styling from classes or inline by making JS objects
While adding class to a HTML elemnent you need to use className instead of class
The style attribute accepts an object instead of a string. All the CSS properties have Camel Casing instead of Kebab
*/
//👇 Creating Object for inline style
const customStyle = {
  fontSize: "3rem",
  textAlign: "center",
  padding: "1rem 0",
  // textDecoration: "underline"
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
};

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      My Favourite Foods
    </h1>
    <div className="container">
      <figure>
        <img
          className="food-item"
          src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"
          alt="pav-bhaji-pic"
        />
        <figcaption>Pav Bhaji</figcaption>
        <br />
      </figure>
      <figure>
        <img
          className="food-item"
          src="https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa.jpg"
          alt="dosa-pic"
        />
        <figcaption>Dosa</figcaption>
        <br />
      </figure>
      <figure>
        <img
          className="food-item"
          src="https://www.indianveggiedelight.com/wp-content/uploads/2022/07/poha-recipe-featured.jpg"
          alt="poha-pic"
        />
        <figcaption>Poha</figcaption>
        <br />
      </figure>
    </div>
  </div>,
  document.getElementById("root")
);
