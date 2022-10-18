import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "1rem",
    justifyContent: "space-between",
    width: "41%",
    "@media (max-width: 900px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",

     },
  },
  input: {
    width: "100%",
    height: "2rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #e0354b",
    fontSize: "1rem",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",

   },
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '0.5rem',
    padding: '.5rem .75rem',
    ':hover': {
      outline: 'none',
      border: '1px solid #e11d3f',
    },
  },
});

class Login extends Component {
  render() {
    return (
      <React.Fragment>
          <p>Login to access the full dashboard</p>
          <form className={css(styles.form)}>
            <label className={css(styles.smallSize)} htmlFor="email">
              Email:
              <input className={css(styles.input)} type="email" placeholder="Email" id="email" />
            </label>
            <label htmlFor="pw">
              Password:
              <input className={css(styles.input)} type="password" placeholder="Password" id="pw" />
            </label>
            <button className={css(styles.button)} type="button">OK</button>
          </form>
      </React.Fragment>
    );
  }
};

export default Login;
