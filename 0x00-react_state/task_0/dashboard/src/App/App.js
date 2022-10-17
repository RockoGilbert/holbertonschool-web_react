import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

// Definition of styles
const styles = StyleSheet.create({
  body: {
    fontFamily: 'Verdana',
    margin: '0.5rem',
    scrollBehavior: 'smooth',
  },
  mainContent: {
    borderTop: '3px #e11d3f solid',
  },
  footer: {
    borderTop: '3px #e11d3f solid',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

class App extends Component {
  // Methods, variables, and rendering of App class component

  // Invoked when component is initially mounted (added to DOM)
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Invoked just before component is unmounted/removed from DOM
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    // Invoked when user presses ctrl-h
    if (e.ctrlKey && e.key === 'h') {
      // e.preventDefault();
      alert('Logging you out');
      const { logOut } = this.props;
      logOut();
    }
  };

  render() {
    // state, variables, functions, and rendering of App component
    const { isLoggedIn } = this.props;

    // Course list to be shown in CourseListRow component
    const listCourses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];

    // Notification list to be shown in Notifications component
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    // Actual rendering of App component
    return (
      <div className={css(styles.body)}>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <main className={css(styles.mainContent)}>
          {/* Either renders isLoggedIn or Login component based on prop */}
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          {/* Temp section */}
          <BodySection title="News from the School">
            <p>some random text</p>
          </BodySection>
        </main>
        <footer className={css(styles.footer)}>
          <Footer />
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
