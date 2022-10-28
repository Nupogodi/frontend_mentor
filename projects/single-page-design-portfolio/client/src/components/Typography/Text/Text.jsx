import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Text.module.css';

export const Text = ({ children, tag = 'h2', size = 'md', color = 'dark' }) => {
  const Component = tag;

  return (
    <Component className={`${styles[color]} ${styles[size]} ${styles.text}`}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
