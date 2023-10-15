import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojis) {
  return (
    <Card
      key={emojis.id}
      name={emojis.name}
      emoji={emojis.emoji}
      meaning={emojis.meaning}
    />
  );
}

function Entry() {
  return emojipedia.map(createCard);
}

export default Entry;
