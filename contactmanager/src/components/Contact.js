import React, { Component } from "react";
import PropTypes from "prop-types";
// this is to import a custom css  import "./contact.css";

/// This is the contact component
/// Shortcut is rcc to create a component

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group-item">
          {/* inline style style={{ color: "blue" }} */}
          <li className="list-group-item">
            Email:<a href={"mailto:" + email}>{email}</a>
          </li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
        <button type="button" className="btn btn-danger">
          Some button
        </button>
      </div>
    );
  }
}

// Type validation using prop-types -- this can also be in the class as a static variable
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
