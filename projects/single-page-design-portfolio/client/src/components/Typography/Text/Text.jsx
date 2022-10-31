import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Text.module.css';

export const Text = ({
  children,
  tag = 'h2',
  size = 'md',
  color = 'dark',
  className = '',
}) => {
  const Component = tag;

  return (
    <Component
      className={`${styles[color]} ${styles[size]} ${styles.text} ${className}`}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
