import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Notifications.module.css';

export function Notifications({
  renderHeader,
  renderBody,
  notifications = [],
}) {
  return (
    <div className={styles.notificationsContainer}>
      {renderHeader(5)}
      <ul className={styles.notifications}>
        {notifications.map((notification) => {
          return <li key={notification.id}>{renderBody(notification)}</li>;
        })}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  renderHeader: PropTypes.func,
  renderBody: PropTypes.func,
  notifications: PropTypes.array,
};
