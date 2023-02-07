import React from "react";

export default function RemoveAllContact(props) {
  return (
    <div>
      <button
        onClick={() => props.handleRemoveAllContacts()}
        className="btn btn-danger form-control"
      >
        Remove All{" "}
      </button>
    </div>
  );
}
