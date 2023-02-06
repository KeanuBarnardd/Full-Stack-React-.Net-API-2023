import React, { Component } from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavouriteContact from "./FavouriteContact";
import GeneralContact from "./GeneralContact";

export default class ContactIndex extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavouriteContact />
            </div>
            <div className="row py-2">
              <GeneralContact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
