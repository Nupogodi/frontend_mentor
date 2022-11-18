import React, { useEffect, useContext } from 'react';

// context
import { NotificationsContext } from 'context/notifications';

// components
import {
  Notifications,
  NotificationItem,
  Heading,
  Button,
  Badge,
  NotificationsHeader,
} from 'components';

// styles
import styles from 'App.module.css';
import 'assets/styles/main.css';

function App() {
  const {
    notifications,
    fetchNotifications,
    getActiveCount,
    markRead,
    markAllRead,
  } = useContext(NotificationsContext);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const activeCount = getActiveCount();

  return (
    <div className={styles.App}>
      <div className='container padded'>
        <Notifications
          notifications={notifications}
          renderHeader={() => (
            <NotificationsHeader
              activeCount={activeCount}
              onSuccess={markAllRead}
            />
          )}
          renderBody={(notification) => (
            <NotificationItem
              onSuccess={() => markRead(notification.id)}
              notification={notification}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
