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
            <div className={styles.flexContainer}>
              <Badge value={activeCount}>
                <Heading tag='h2' size='xl'>
                  Notifications
                </Heading>
              </Badge>
              <Button styled='text' onClick={markAllRead}>
                Mark all as read
              </Button>
            </div>
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
