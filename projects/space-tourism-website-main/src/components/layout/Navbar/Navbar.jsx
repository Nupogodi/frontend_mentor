import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// constants
import { ROUTES } from 'utils/constants';

// hooks
import { useMatchMedia } from 'hooks/';

// components
import {
  Logo,
  Close,
  Hamburger,
  Button,
  DesktopView,
  MobileView,
} from 'components';

// styles
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const [isTablet, isDesktop] = useMatchMedia([
    '(min-width: 768px)',
    '(min-width: 1440px)',
  ]);

  const logoWidth = isTablet ? '48px' : '40px';

  const toggleMobileDrawer = function () {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link to={ROUTES.home.url}>
        <Logo size={logoWidth} />
      </Link>
      <div className={styles.decorativeLine} />
      {isTablet ? (
        <DesktopView isDesktop={isDesktop} />
      ) : (
        <div>
          <div className={styles.toggleBtn}>
            <Button styled='wrapper' onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <Close /> : <Hamburger />}
            </Button>
          </div>
          <MobileView mobileDrawerOpen={mobileDrawerOpen} />
        </div>
      )}
    </nav>
  );
}
