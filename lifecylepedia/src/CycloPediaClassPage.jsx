import React, { Component } from "react";
import { getRandomUser } from "./Utility/api";

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

  componentDidMount = async () => {
    console.log("Component Did Mount");
    const response = await getRandomUser();
    console.log(response);

    this.setState((prevState) => {
      return {
        instructor: {
          name: response.data.first_name + " " + response.data.last_name,
          email: response.data.email,
          phone: response.data.phone_number,
        },
      };
    });
  };

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Did Unmount");
  }

  render() {
    console.log("Render Component");
    return (
      <div className="">
        {this.state.instructor && (
          <div className="p-3">
            <span className="h4 text-success">Instructor</span>
            <i className="bi-toggle-off btn btn-success btn-sm"></i>
            <br />
            Name:{this.state.instructor.name}
            <br />
            Email:{this.state.instructor.email}
            <br />
            Phone:{this.state.instructor.phone}
          </div>
        )}
      </div>
    );
  }
}
