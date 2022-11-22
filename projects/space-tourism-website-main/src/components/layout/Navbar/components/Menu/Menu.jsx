import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// components
import { Link } from 'react-router-dom';
import { NavItem } from 'components';

// constants
import { ROUTES } from 'utils/constants';

// styles
import styles from './Menu.module.css';

const cx = classNames.bind(styles);

export function Menu({
  view = 'mobile',
  showCounter = false,
  paddedItems = false,
  hoverOn = false,
}) {
  const className = cx({
    mobileView: view === 'mobile',
    desktopView: view === 'desktop',
    menu: true,
  });

  return (
    <ol className={className}>
      {Object.values(ROUTES).map((value) => (
        <li
          className={`${styles.item} ${hoverOn && styles.hoverOn} ${
            showCounter && styles.counter
          }`}
        >
          <Link key={value.url} to={value.url}>
            <NavItem url={value.url} title={value.title} padded={paddedItems} />
          </Link>
        </li>
      ))}
    </ol>
  );
}

Menu.propTypes = {
  view: PropTypes.oneOf(['mobile', 'desktop']).isRequired,
  showCounter: PropTypes.bool,
  paddedItems: PropTypes.bool,
  hoverOn: PropTypes.bool,
};

Menu.defaultProps = {
  showCounter: false,
  paddedItems: false,
  hoverOn: false,
};
