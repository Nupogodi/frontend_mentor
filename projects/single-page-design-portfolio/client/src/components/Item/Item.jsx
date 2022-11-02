import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Item.module.css';

export const Item = ({ style, children, render }) => {
  return (
    <li style={style} className={styles.item}>
      {render && render()}
      {children}
    </li>
  );
};

Item.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  render: PropTypes.func,
};
