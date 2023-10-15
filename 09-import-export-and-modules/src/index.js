import React from "react";
import ReactDOM from "react-dom";
//We dont have to name the variable same as the one we are exporting;
import PI from "./math";
//If we are importing non default variable/function then we have to define the exact same name
import { doublePI, triplePI } from "./math";

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePI()}</li>
    <li>{triplePI()}</li>
  </ul>,
  document.getElementById("root")
);

/*
Import / Export is an ES6 feature which is available to only 80% of 
the world's population. Bable converts it to "require" method from 
node which is globally available.

If you are not using react then use 
var PI = require("./math.js");

NOTE: You can use wild card method: import * as pi from "./math" and
access all variables as pi.default , pi.doublePI() and pi.triplePI().
But it is discouraged as we lose the power of a default export.
*/
