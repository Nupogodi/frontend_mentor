import React from 'react';
import PropTypes from 'prop-types';

// components
import { Text } from 'components';

// styles
import styles from './Message.module.css';

export function Message({ message }) {
  return (
    <div className={styles.message}>
      <Text tag='p' size='sm'>
        {message}
      </Text>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
