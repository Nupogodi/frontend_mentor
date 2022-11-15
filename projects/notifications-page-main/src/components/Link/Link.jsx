import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Link.module.css';

export function Link({ href, children }) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
};
