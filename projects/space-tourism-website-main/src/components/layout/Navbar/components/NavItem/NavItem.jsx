import React from 'react';
import PropTypes from 'prop-types';

// components
import { Typography } from 'components';

// styles
import styles from './NavItem.module.css';

export const NavItem = ({ title, padded = false }) => (
  <div className={padded && styles.padded}>
    <Typography tag='p' preset='navText'>
      {title}
    </Typography>
  </div>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  padded: PropTypes.bool,
};

NavItem.defaultProps = {
  padded: false,
};
