import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Text.module.css';

export const Text = ({
  children,
  tag = 'p',
  size = 'md',
  color = 'light',
  bold = false,
  className = '',
}) => {
  const Component = tag;

  return (
    <Component
      className={`${styles[color]} ${styles[size]} ${bold && styles.bold} ${
        styles.text
      } ${className}`}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
};
