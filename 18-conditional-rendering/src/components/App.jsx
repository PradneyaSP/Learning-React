import React from "react";
import Login from "./Login";

var isLogged = false;
// var currTime = new Date();

function App() {
  return isLogged ? <h1 className="container">Hello</h1> : <Login />;
  // return currTime.getHours() > 12 && <h1 class="container">Why are you still working ?</h1>
}

export default App;
