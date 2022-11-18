import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// constants
import { ROUTES } from 'utils/constants';

// components
import { Logo, Close, Hamburger, Button } from 'components';
import { NavItem } from './components/NavItem';

// styles
import styles from './Navbar.module.css';

export function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = function () {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className={styles.nav}>
      <Link to={ROUTES.home.url}>
        <Logo />
      </Link>
      <div className={styles.toggleBtn}>
        <Button styled='wrapper' onClick={toggleMobileDrawer}>
          {mobileDrawerOpen ? <Close /> : <Hamburger />}
        </Button>
      </div>
      <div
        className={`${styles.mobileDrawer} ${
          mobileDrawerOpen && styles.active
        } ${styles.frostContainer}`}
      >
        <ul className={styles.navList}>
          {Object.values(ROUTES).map((value, index) => (
            <li key={value.url} className={styles.navItem}>
              <NavItem index={index} url={value.url} title={value.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
