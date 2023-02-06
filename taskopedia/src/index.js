import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainBody() {
  return (
    <div>
      <p>IN this course, we will lean how to be cool</p>
      <ul>
        <li>Call yo mama house</li>
        <li>Go to wallmart</li>
      </ul>
    </div>
  );
}

function Header() {
  return <h1>React Course</h1>;
}

function Footer() {
  return <p>Happy Coding!</p>;
}

root.render(
  <>
    <Header />
    <MainBody />
    <Footer />
  </>
);
