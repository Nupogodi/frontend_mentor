import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// styles
import styles from './Typography.module.css';

const cx = classNames.bind(styles);

export function Typography({
  children,
  tag = 'h2',
  size = 'md',
  color = 'light',
  centered = false,
  font = 'primary',
  bold = false,
  letterSpacing = 0,
  uppercase = false,
}) {
  const Component = tag;

  const className = cx({
    [size]: size,
    [color]: color,
    [centered]: centered,
    [font]: font,
    uppercase,
    centered,
    bold,
    typography: true,
  });

  return (
    <Component className={className} style={{ letterSpacing }}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.string,
  centered: PropTypes.bool,
  font: PropTypes.string,
  letterSpacing: PropTypes.number,
  uppercase: PropTypes.bool,
};

Typography.defaultProps = {
  tag: 'h2',
  bold: false,
  font: 'primary',
  size: 'md',
  color: 'light',
  centered: false,
  letterSpacing: 0,
  uppercase: false,
};
