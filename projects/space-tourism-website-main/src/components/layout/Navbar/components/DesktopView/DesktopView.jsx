import React from 'react';
import PropTypes from 'prop-types';

// constants
import { ROUTES } from 'utils/constants';

// components
import { NavItem } from 'components';

// styles
import styles from './DesktopView.module.css';

export const DesktopView = ({ isDesktop }) => (
    <ul className={styles.navList}>
      {Object.values(ROUTES).map((value, index) => (
        <li key={value.url} className={styles.navItem}>
          <NavItem
            showDigits={isDesktop}
            index={index}
            url={value.url}
            title={value.title}
          />
        </li>
      ))}
    </ul>
  )

DesktopView.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};
