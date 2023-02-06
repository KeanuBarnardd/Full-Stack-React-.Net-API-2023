import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact();
  };

  render() {
    return (
      <div className="border col-12 p-2">
        <form onSubmit={this.handleAddContactFormSubmit} className="row p-2">
          <div className="col-21">Add a new Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input type="text" className="form-control form-control-sm" placeholder="Name..." />
          </div>

          <div className="col-12 col-md-4 p-1">
            <input type="text" className="form-control form-control-sm" placeholder="Email..." />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input type="text" className="form-control form-control-sm" placeholder="Phone..." />
          </div>
          <div className="col-12 col-md-6 offset-md-3 p-1">
            <button className="btn btn-primary btn-sm form-control">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
