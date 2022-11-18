import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Badge.module.css';

export function Badge({ value, children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.badge}>{value}</div>
    </div>
  );
}

Badge.propTypes = {
  value: PropTypes.number,
};
