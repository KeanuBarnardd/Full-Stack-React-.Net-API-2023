import React, { Component } from "react";

export default class Instructor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("Update - Instructor");
  }

  componentDidMount() {
    console.log("Mounted - Instructor");
  }

  componentWillUnmount() {
    console.log("Unmount - Instructor");
  }

  render() {
    console.log("Render- Instructor");
    return (
      <div className="p-3">
        <span className="h4 text-success">Instructor</span>
        <i className="bi-toggle-off btn btn-success btn-sm"></i>
        <br />
        Name:{this.props.instructor.name}
        <br />
        Email:{this.props.instructor.email}
        <br />
        Phone:{this.props.instructor.phone}
      </div>
    );
  }
}
