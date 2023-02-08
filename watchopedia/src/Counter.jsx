import React from "react";

export default function Counter() {
  return (
    <div className="col-12 col-md-2 offset-md-5 border">
      <span className="h2 pt-4 m-2">Fun Counter</span>
      <br />
      <button className="btn btn-success m-1">+1</button>
      <button className="btn btn-danger m-1">-1</button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        
        <span className="text-success">0</span>
      </span>
    </div>
  );
}
