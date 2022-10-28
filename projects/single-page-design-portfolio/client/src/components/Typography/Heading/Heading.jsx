import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// styles
import styles from './Heading.module.css';

const cx = classNames.bind(styles);

export const Heading = ({
  children,
  tag = 'h2',
  size = 'lg',
  color = 'dark',
}) => {
  const Component = tag;
  const className = cx({
    [size]: true,
    [color]: true,
    heading: true,
  });

  return <Component className={className}>{children}</Component>;
};

Heading.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
