import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Text.module.css';

const cx = classNames.bind(styles);

export const Text = ({ children, tag = 'h2', size = 'md', color = 'dark' }) => {
  const Component = tag;
  const className = cx({
    [size]: true,
    [color]: true,
    text: true,
  });

  return <Component className={className}>{children}</Component>;
};

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
