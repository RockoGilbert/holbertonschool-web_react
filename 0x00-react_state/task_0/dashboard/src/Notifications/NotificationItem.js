import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  // Definition of props
  const {
    type, value, html, markAsRead,
  } = props;

  // Definition of styles
  const styles = StyleSheet.create({
    item: {
      fontSize: 20,
      padding: '10px 8px',
      borderBottom: '1px solid black',
      '@media (min-width: 900px)': {
        padding: 0,
        border: 'none',
      },
    },
    defaultPriority: {
      color: 'blue',
    },
    urgentPriority: {
      color: 'red',
    },
  });

  if (value) {
    return (
      <li
        className={type === 'default' ? css(styles.defaultPriority, styles.item) : css(styles.urgentPriority, styles.item)}
        data-notification-type={type}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  }
  return (
    <li
      className={type === 'default' ? css(styles.defaultPriority, styles.item) : css(styles.urgentPriority, styles.item)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={markAsRead}
    />
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {
    __html: '',
  },
  markAsRead: () => {},
};

export default memo(NotificationItem);
