import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import { Typography } from 'components';

// styles
import styles from './NavItem.module.css';

export const NavItem = ({ index, url, title, showDigits }) => (
    <Link to={url}>
      <div className={styles.navLink}>
        {showDigits && (
          <Typography tag='p' bold preset='navText'>
            {index > 9 ? index : `0${index}`}
          </Typography>
        )}

        <Typography tag='p' preset='navText'>
          {title}
        </Typography>
      </div>
    </Link>
  )

NavItem.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showDigits: PropTypes.bool,
};

NavItem.defaultProps = {
  showDigits: true,
};
