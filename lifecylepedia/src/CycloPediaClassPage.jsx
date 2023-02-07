import React, { Component } from "react";

export default class CycloPediaClassPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  }

  render() {
    return <div>CycloPediaClassPage</div>;
  }
}
