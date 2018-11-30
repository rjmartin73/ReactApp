import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-255-5555"
      },
      {
        id: 1,
        name: "Karen Smith",
        email: "ksmith@gmail.com",
        phone: "555-255-2055"
      },
      {
        id: 2,
        name: "Hung Johnson",
        email: "bigd@gmail.com",
        phone: "555-255-7878"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            // email={contact.email}
            // phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
