import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Heading.module.css';

export const Heading = ({
  children,
  tag = 'h2',
  size = 'lg',
  color = 'dark',
  centered = false,
  className = '',
}) => {
  const Component = tag;

  return (
    <Component
      className={`${styles[color]} ${styles[size]} ${styles.heading} ${className} ${centered && styles.centered}`}
    >
      {children}
    </Component>
  );
};

Heading.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  centered: PropTypes.bool,
};
