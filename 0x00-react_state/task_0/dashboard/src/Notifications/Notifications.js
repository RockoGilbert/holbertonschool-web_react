import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

// Defintion of animation
const opacityKeyframes = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

// Definition of styles
const styles = StyleSheet.create({
  Notif: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    // width: props.displayDrawer ? '100vh' : 'auto',
    // height: props.displayDrawer ? '100vh' : 'auto',
    '@media (min-width: 900px)': {
      marginRight: '1rem',
    },
  },
  menuItem: {
    marginBottom: '1rem',
    backgroundColor: '#fff8f8',
    zIndex: '1',
    float: 'right',
    '@media (min-width: 900px)': {
      textAlign: 'right',
    },
    ':hover': {
      pointer: 'cursor',
      // Only works when not using styles.animation also?
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationName: [opacityKeyframes, bounceKeyframes],
    },
  },
  notifList: {
    listStyle: 'none',
    fontSize: 20,
    zIndex: '1',
    '@media (min-width: 900px)': {
      border: '1px red dashed',
      padding: '1rem 7rem 2rem 2rem',
    },
  },
  animation: {
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3',
    animationName: [opacityKeyframes, bounceKeyframes],
  },
});

class Notifications extends Component {
  // Methods, variables, and rendering of Notifications class component

  constructor() {
    super();
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return nextProps.listNotifications.length > listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.Notif)}>
        <div id="menuItem" className={css(styles.menuItem, styles.animation)}>Your Notifications</div>
        {displayDrawer && (
          <div id="Notifs" className={css(styles.notifList)}>
            {listNotifications.length
              ? <p>Here is the list of notifications</p>
              : <p>No new notification for now</p>}
            {listNotifications ? (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type ? notif.type : 'default'}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => this.markAsRead(notif.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )}
            <button
              type="button"
              aria-label="Close"
              style={{
                position: 'absolute', top: '4.5rem', right: '2.5rem', border: 'none', background: 'none',
              }}
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                alt="Close"
                width="15px"
                height="15px"
                border="0"
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
