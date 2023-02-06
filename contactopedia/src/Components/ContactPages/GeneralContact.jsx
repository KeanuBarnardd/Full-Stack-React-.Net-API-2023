import React from "react";
import Contact from "./Contact";
export default function GeneralContact(props) {
  return (
    <div className="col-12 py-2" style={{ borderRadius: "10px", backgroundColor: "#323637" }}>
      <div className="p-2">
        {props.contacts.map((obj, index) => (
          <Contact contact={obj} key={index} />
        ))}
      </div>
    </div>
  );
}
