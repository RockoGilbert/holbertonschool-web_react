import React, { Component }from "react";
import logo from "../assets/holberton_logo.jpg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
    );
  }
};

export default Header;
