import React, { Component } from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavouriteContact from "./FavouriteContact";
import GeneralContact from "./GeneralContact";

export default class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact == "") {
      return { status: "falure", msg: "Please Enter a valid name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id:
          this.state.contactList.length !== 0
            ? this.state.contactList[this.state.contactList.length - 1].id + 1
            : this.setState((prevState) => {
                return {
                  ...prevState,
                  id: 0,
                };
              }),
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added succesfully" };
    }
  };

  handleUpdateContact = (updatedContact) => {
    if (updatedContact.name == "") {
      return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (updatedContact.phone == "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == updatedContact.id) {
            return {
              ...obj,
              name: updatedContact.name,
              email: updatedContact.email,
              phone: updatedContact.phone,
            };
          }
          return obj;
        }),
        isUpdating: false,
        selectedContact: undefined,
      };
    });
    return { status: "success", msg: "Contact was updated successfully" };
  };

  handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          } else {
            return obj;
          }
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contact.id;
        }),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,

      id:
        this.state.contactList.length !== 0
          ? this.state.contactList[this.state.contactList.length - 1].id + 1
          : this.setState((prevState) => {
              return {
                ...prevState,
                id: 0,
              };
            }),
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContacts = () => {
    console.log("This works");
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
    console.log(this.state.contactList);
  };

  handleCancelUpdate = (contact) => {
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleUpdateClick = (contact) => {
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact handleAddRandomContact={this.handleAddRandomContact} />
            </div>
            <div className="col-4">
              <RemoveAllContact handleRemoveAllContacts={this.handleRemoveAllContacts} />
            </div>
            <div className="row py-2">
              <AddContact
                handleAddContact={this.handleAddContact}
                isUpdating={this.state.isUpdating}
                selectedContact={this.state.selectedContact}
                handleCancelUpdate={this.handleCancelUpdate}
                handleUpdateContact={this.handleUpdateContact}
              />
            </div>
            <div className="row py-2">
              <FavouriteContact
                favoriteClick={this.handleToggleFavorite}
                deleteClick={this.handleDeleteContact}
                handleUpdateClick={this.handleUpdateClick}
                contacts={this.state.contactList.filter((u) => u.isFavorite == true)}
              />
            </div>
            <div className="row py-2">
              <GeneralContact
                favoriteClick={this.handleToggleFavorite}
                deleteClick={this.handleDeleteContact}
                handleUpdateClick={this.handleUpdateClick}
                contacts={this.state.contactList.filter((u) => u.isFavorite == false)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
