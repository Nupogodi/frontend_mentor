import React from 'react';

import PropTypes from 'prop-types';

// components
import { Button, Link, Text } from 'components';
import { Avatar, Message, TimeSince } from './components';
// styles
import styles from './NotificationItem.module.css';

export function NotificationItem({ notification = {}, onSuccess = () => {} }) {
  const { user, timeSince, read } = notification;
  const { name, avatar, action } = user;
  const { description, title, url, message, image } = action;

  return (
    // <Button styled='wrapper' onClick={onSuccess}>
    <div className={`${styles.notification} ${!read && styles.activeBg}`}>
      <Link href='#'>
        <Avatar className={styles.avatar} src={avatar} alt='' />
      </Link>
      <div>
        <div className={styles.textWrapper}>
          <div className={`${styles.hFlow} ${!read && styles.active}`}>
            <Text className='inline' tag='p' color='dark' size='sm' bold>
              {name}
            </Text>
            <Text className='inline' tag='p' size='sm'>
              {description}{' '}
            </Text>
            {title && <Link href={url}>{title}</Link>}
          </div>
          <TimeSince seconds={timeSince} />
        </div>
        {message && <Message message={message} />}
      </div>
      {image && <Avatar className={styles.image} src={image} alt='' />}
    </div>
  );
}

NotificationItem.propTypes = {
  onSuccess: PropTypes.func,
  notification: PropTypes.object,
  read: PropTypes.bool,
  avatar: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  message: PropTypes.string,
  image: PropTypes.object,
};
