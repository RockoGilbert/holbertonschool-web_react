import React, { Component } from 'react';
import BodySection from '../BodySection/BodySection';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite'


// array for the list of courses
const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

// array for the list of notifications
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
];

const styles = StyleSheet.create({

  app: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
    body: {
      fontFamily: 'Verdana',
      margin: '1rem',
      scrollBehavior: 'smooth',

    },
    mainContent: {
      borderTop: '3px #e11d3f solid',
    },
    footer: {
      borderTop: '3px #e11d3f solid',
      textAlign: 'center',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      fontStyle: 'italic',
    },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayDrawer: false};

    // This binding is necessary to make `this` work in the callback
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

 handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  }

  handleHideDrawer =() => {
    this.setState({
      displayDrawer: false,
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        alert("Logging you out");
        this.props.logOut();
      }
    });
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", (e) => {});
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications}
        />
        <div className={css(styles.app)} id="App" >
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ?
            <BodySectionWithMarginBottom title="Course List" >
              <p>Lick My BodySection</p>
              <CourseList  listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>Im Over It</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {console.log("Logging you out")},
};

export default App;