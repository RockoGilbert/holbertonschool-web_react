import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

// Definition of styles
const styles = StyleSheet.create({
  AppHeader: {
    color: '#e11d3f',
    display: 'flex',
    alignItems: 'center',
  },
  imgSize: {
    height: '10rem',
    width: '10rem',
    '@media (min-width: 900px)': {
      height: '15rem',
      width: '15rem',
    },
  },
  title: {
    display: 'inline',
    fontSize: '1.5rem',
    '@media (min-width: 900px)': {
      fontSize: '2rem',
      marginLeft: '1rem',
    },
  },
});

export default function Header() {
  return (
    <header className={css(styles.AppHeader)}>
      <img className={css(styles.imgSize)} src={logo} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}
