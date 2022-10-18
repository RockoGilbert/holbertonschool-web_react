import React, { Component }from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from 'aphrodite';
import Notifications from "../Notifications/Notifications";

const style = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
    padding: '15px 30px',
    fontSize: '20px',
  },
  logo: {
    width: '240px',
    height: '240px',
  },
  h1: {
    display: 'flex',
  }
});
class Header extends Component {
  render() {
    return (
      <header className={css(style.header)}>

        <img src={logo} className={css(style.logo)} alt="logo" />
        <h1 className={css(style.h1)}>School dashboard</h1>
      </header>
    );
  }
};

export default Header;
