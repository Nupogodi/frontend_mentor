import React from 'react';
import PropTypes from 'prop-types';

// components
import { Heading, Button, Badge } from 'components';

import styles from './NotificationsHeader.module.css';

export function NotificationsHeader({ onSuccess, activeCount }) {
  return (
    <div className={styles.flexContainer}>
      <Badge value={activeCount}>
        <Heading tag='h2' size='xl'>
          Notifications
        </Heading>
      </Badge>
      <Button styled='text' onClick={onSuccess}>
        Mark all as read
      </Button>
    </div>
  );
}

NotificationsHeader.propTypes = {
  onSuccess: PropTypes.func,
  activeCount: PropTypes.number,
};
