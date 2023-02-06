import React from "react";
import Contact from "./Contact";

export default function FavouriteContact(props) {
  return (
    <div>
      {props.contacts.map((obj, index) => (
        <Contact contact={obj} key={index} />
      ))}
    </div>
  );
}
