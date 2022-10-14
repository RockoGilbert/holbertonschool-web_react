import React from 'react'
import PropTypes from 'prop-types'

// Define the prop types for the NotificationItem component

const NotificationItem = ({ type, value, html }) => {
  if (value) return(<li data-notification-type={type}>{value}</li>)
	if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
	return(<li data-notification-type={type}></li>)
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};
NotificationItem.defaultProps = {
  type: 'default',
};
export default NotificationItem