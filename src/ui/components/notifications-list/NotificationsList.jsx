import { useEffect, useState } from 'react';
import axios from 'axios';
import Notification from './Notification';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await axios.get('/api/notifications');
      setNotifications(res.data);
    };

    fetchNotifications();
  }, []);

  const handleRead = async (id) => {
    const res = await axios.put(`/api/notifications/${id}`);
    setNotifications(notifications.map((n) => (n.id === id ? res.data : n)));
  };

  return (
    <div className="notifications">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onRead={handleRead}
        />
      ))}
    </div>
  );
};

export default Notifications;
