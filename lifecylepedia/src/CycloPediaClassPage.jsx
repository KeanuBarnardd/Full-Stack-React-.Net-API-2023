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
      inputName: "",
      inputFeedback: "",
    };
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudents = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  componentDidMount = async () => {
    console.log("Component Did Mount");
    if (JSON.parse(localStorage.getItem("cylcopediaState"))) {
      this.setState(JSON.parse(localStorage.getItem("cylcopediaState")));
    } else {
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
    }
  };

  componentDidUpdate() {
    console.log("Component Did Update");
    localStorage.setItem("cylcopediaState", JSON.stringify(this.state));
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
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            onChange={(e) => this.setState({ inputName: e.target.value })}
            value={this.state.inputName}
            placeholder="Name..."
          ></input>
          Value: {this.state.inputName}
          <br />
          <textarea
            name=""
            onChange={(e) => this.setState({ inputFeedback: e.target.value })}
            value={this.state.inputFeedback}
            placeholder="feedback"
            id=""
            cols="30"
            rows="3"
          ></textarea>
          Value: {this.state.inputFeedback}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Students</span> <br />
          <div>Student Count: {this.state.studentCount}</div>
          <button onClick={this.handleAddStudent} className="btn btn-success btn-sm">
            Add Student
          </button>
          &nbsp;
          <button onClick={this.handleRemoveAllStudents} className="btn btn-danger btn-sm">
            Remove All Student
          </button>
        </div>
      </div>
    );
  }
}
