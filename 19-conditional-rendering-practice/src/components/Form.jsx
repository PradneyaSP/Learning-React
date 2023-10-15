import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {props.isRegistered ? (
        <Button name="Submit" />
      ) : (
        <Button name="Register" />
      )}
    </form>
  );
}

// My solution 👇
// function Form(props) {
//   return props.isRegistered ? (
//     <form className="form">
//       <Input type="text" placeholder="Username" />
//       <Input type="password" placeholder="Password" />
//       <Button name="Submit" />
//     </form>
//   ) : (
//     <form className="form">
//       <Input type="text" placeholder="Username" />
//       <Input type="password" placeholder="Password" />
//       <Input type="password" placeholder="Confirm Password" />
//       <Button name="Register" />
//     </form>
//   );
// }

export default Form;
