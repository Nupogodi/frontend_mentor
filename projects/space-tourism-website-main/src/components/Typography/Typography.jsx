import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Typography.module.css';

export function Typography({
  children,
  tag = 'h2',
  size = 'lg',
  color = 'dark',
  centered = false,
  className = '',
  font = 'primary',
}) {
  const Component = tag;

  return (
    <Component
      className={`${styles[color]} ${styles[size]} ${
        styles.typography
      } ${className} ${centered && styles.centered} ${styles[font]}`}
    >
      {children}
    </Component>
  );
}

Typography.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
  font: PropTypes.string,
};

Typography.defaultProps = {
  tag: 'h2',
  font: 'primary',
  size: 'lg',
  color: 'dark',
  centered: false,
  className: '',
};
