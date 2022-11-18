import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import { Typography } from 'components';

// styles
import styles from './NavItem.module.css';

export function NavItem({ index, url, title }) {
  return (
    <Link to={url}>
      <div className={styles.navLink}>
        <Typography tag='p' bold size='xxs' letterSpacing={2.7} uppercase>
          {index > 9 ? index : `0${index}`}
        </Typography>
        <Typography tag='p' size='xxs' letterSpacing={2.7} uppercase>
          {title}
        </Typography>
      </div>
    </Link>
  );
}

NavItem.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
