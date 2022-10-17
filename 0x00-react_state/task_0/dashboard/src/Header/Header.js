import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

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
  titleDiv: {
    flexDirection: 'column',
    marginLeft: '2rem',
    textAlign: 'left',
    color: 'black',
    ':nth-child(1n) > h1': {
      fontSize: '1.5rem',
      '@media (min-width: 900px)': {
        fontSize: '2rem',
      },
    },
  },
  button: {
    border: 'none',
    background: 'none',
    fontSize: '1rem',
  },
});

const Header = function Header() {
  // Take values from context - defined in other components
  const { user, logOut } = useContext(AppContext);

  return (
    <header className={css(styles.AppHeader)}>
      <img className={css(styles.imgSize)} src={logo} alt="logo" />
      <div className={css(styles.titleDiv)}>
        <h1>School dashboard</h1>
        {user.isLoggedIn ? (
          <div id="logoutSection">
            <p>
              Welcome
              {' '}
              {user.email}
              {' '}
              <button
                type="button"
                className={css(styles.button)}
                onClick={logOut}
              >
                (logout)
              </button>
            </p>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
