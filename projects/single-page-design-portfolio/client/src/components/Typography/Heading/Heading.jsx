import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Heading.module.css';

export const Heading = ({
  children,
  tag = 'h2',
  size = 'lg',
  color = 'dark',
}) => {
  const Component = tag;

  return (
    <Component className={`${styles[color]} ${styles[size]} ${styles.text}`}>
      {children}
    </Component>
  );
};

Heading.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
