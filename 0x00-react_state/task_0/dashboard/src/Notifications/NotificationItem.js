import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  thing: {
    '@media (max-width: 900px)': {
    fontSize: 20,
    padding: '10px 8px',
    borderBottom: '1px solid black',
    },
  },
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, html, value, markAsRead }) => {
  const itemUrgent = type === 'urgent' ? styles.urgent : styles.default;
  const itemDefault = type === 'default' ? styles.default : styles.urgent;
  if (value) {
    return (
      <li
        className={type === 'urgent' ? css(styles.thing, itemUrgent) : css(styles.thing, itemDefault)}
        data-notification-type={type}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  } else {
    return (
      <li
        className={type === 'default' ? css(styles.thing, itemDefault) : css(styles.thing, itemUrgent)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={markAsRead}
      />
    );
  }
};



NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};
NotificationItem.defaultProps = {
  type: 'default',
  value: null,
  html: null,
  markAsRead: () => {},
};
export default memo(NotificationItem);
