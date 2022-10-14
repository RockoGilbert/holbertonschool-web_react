import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';


export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <><div className='menuItem'> Your notifications </div>
      {displayDrawer && (
        <div className="Notifications">
        {
          listNotifications.length ? (
            <p>Here is the list of notifications</p>
          ) : ( <p>"No new notification for now"</p>
              )}
              {listNotifications ? (
                listNotifications.map((Note) =>
                    <NotificationItem
                    key={Note.id}
                    type={Note.type}
                    value={Note.value}
                    html={Note.html} />
              )
              ) : (
                <tr>No course available yet</tr>
        )}
      <button
        style={{
          border: 0,
          background: 'white',
          position: 'absolute',
          right: 95,
          top: 90,
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} height="15px" width="15" alt="close icon" />
      </button>
    </div>)}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
};
