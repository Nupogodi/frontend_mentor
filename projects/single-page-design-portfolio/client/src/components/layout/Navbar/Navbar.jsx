import React from 'react';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Button } from 'components/';

// styles
import styles from './Navbar.module.css';

export const Navbar = ({ tag = 'nav' }) => {
  const Component = tag;

  return (
    <Component className={styles.navbar}>
      <div className={`paddedContainer dFlex ${styles.centered}`}>
        <Logo />
        <Button>Free Consultation</Button>
      </div>
    </Component>
  );
};

Navbar.propTypes = {
  tag: PropTypes.string.isRequired,
};
