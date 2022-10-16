import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


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
class App extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === 'h') {
        // e.preventDefault();
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
        <Notifications  listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList  listCourses={listCourses} /> : <Login />}
          </div>
          <div className="App-footer">
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
