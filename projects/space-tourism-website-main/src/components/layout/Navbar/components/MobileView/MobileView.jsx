import React from 'react';
import PropTypes from 'prop-types';

// constants
import { ROUTES } from 'utils/constants';

// components
import { NavItem } from 'components';
// styles
import styles from './MobileView.module.css';

export const MobileView = ({ mobileDrawerOpen }) => (
    <div
      className={`${styles.mobileDrawer} ${mobileDrawerOpen && styles.active} `}
    >
      <ul className={styles.navList}>
        {Object.values(ROUTES).map((value, index) => (
          <li key={value.url} className={styles.navItem}>
            <NavItem
              showDigits
              index={index}
              url={value.url}
              title={value.title}
            />
          </li>
        ))}
      </ul>
    </div>
  )

MobileView.propTypes = {
  mobileDrawerOpen: PropTypes.bool.isRequired,
};
