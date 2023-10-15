import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCards(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App(prop) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL={require("../../assets/mypic.jpg")} />
      {contacts.map(createCards)}
    </div>
  );
}

export default App;
