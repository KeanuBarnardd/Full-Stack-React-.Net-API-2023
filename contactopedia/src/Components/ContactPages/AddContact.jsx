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
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    this.props.handleAddContact({ name: name, email: email, phone: phone });
  };

  render() {
    return (
      <div className="border col-12 p-2">
        <form onSubmit={this.handleAddContactFormSubmit} className="row p-2">
          <div className="col-21">Add a new Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Name..."
              name="contactName"
            />
          </div>

          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Email..."
              name="contactEmail"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Phone..."
              name="contactPhone"
            />
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
