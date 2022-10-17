import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Definition of styles
const styles = StyleSheet.create({
  Login: {
    marginLeft: '2rem',
    marginTop: '3rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  input: {
    fontSize: '1rem',
    border: '1px solid lightgrey',
    ':focus': {
      outline: 'none',
      border: '1px solid #e11d3f',
      padding: '0.5rem',
    },
    '@media (min-width: 900px)': {
      margin: '0 1rem',
    },
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '0.5rem',
    width: '2.5rem',
    ':hover': {
      outline: 'none',
      
      border: '1px solid #e11d3f',
    },
    '@media (min-width: 900px)': {
      padding: '0.5rem .75rem',
    },
  },
});

export default function Login() {
  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.form)}>
        <label htmlFor="email">
          Email:
          <input className={css(styles.input)} type="email" placeholder="Email" id="email" />
        </label>
        <label htmlFor="pw">
          Password:
          <input className={css(styles.input)} type="password" placeholder="Password" id="pw" />
        </label>
        <button className={css(styles.button)} type="button">OK</button>
      </div>
    </div>
  );
}