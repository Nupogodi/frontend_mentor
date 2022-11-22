import React from 'react';
import PropTypes from 'prop-types';

// components
import { Menu } from 'components';

// styles
import styles from './MobileView.module.css';

export const MobileView = ({ mobileDrawerOpen }) => (
  <div
    className={`${styles.mobileDrawer} ${mobileDrawerOpen && styles.active}`}
  >
    <Menu showCounter view='mobile' />
  </div>
);

MobileView.propTypes = {
  mobileDrawerOpen: PropTypes.bool.isRequired,
};
