import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
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
  return (
    <>
      <MainHeader />
      <SubHeader /> 
    </>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightGrey",
};

function MainHeader() {
  return <h1 className="heading1">React Course</h1>;
}

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

function Footer() {
  return <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>;
}

root.render(
  <>
    <Header />
    <MainBody />
    <Footer />
  </>
);
