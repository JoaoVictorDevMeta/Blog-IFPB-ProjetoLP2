import React from 'react';

const Notification = ({ notification, onRead }) => (
    <div className={`notification ${notification.read ? 'read' : ''}`}>
      <p>{notification.message}</p>
      {!notification.read && <button onClick={() => onRead(notification.id)}>Mark as read</button>}
    </div>
);

export default Notification;