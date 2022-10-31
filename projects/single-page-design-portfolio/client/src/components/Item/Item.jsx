import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Item.module.css';

export const Item = ({ color, children, svg, gridArea }) => {
  const SVG = svg;

  return (
    <div
      style={{ backgroundColor: color, gridArea: gridArea }}
      className={styles.item}
    >
      {' '}
      <SVG className={styles.svg} />
      {children}
    </div>
  );
};

Item.propTypes = {
  color: PropTypes.string,
  svg: PropTypes.object,
  className: PropTypes.string,
  gridArea: PropTypes.string,
};
