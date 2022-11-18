import React, { useState } from 'react';
import { NotificationsContext } from './context';

// utilities
import { DUMMY_DATA } from 'utils';

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    // Imaginery fetch request to set the data
    setNotifications(DUMMY_DATA);

    return notifications;
  };

  const getActiveCount = () => {
    return notifications.filter((notification) => !notification.read).length;
  };

  const markAllRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      notification.read = true;

      return notification;
    });

    setNotifications(updatedNotifications);
  };

  const markRead = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        notification.read = true;
      }

      return notification;
    });

    setNotifications(updatedNotifications);
  };

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        getActiveCount,
        markAllRead,
        markRead,
        fetchNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
