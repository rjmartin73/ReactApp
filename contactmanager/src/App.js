import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="My Contact Manager" myclass="alert alert-danger" />
        <div className="container">
          <Contacts />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
