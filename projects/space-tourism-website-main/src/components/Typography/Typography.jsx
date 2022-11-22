import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// styles
import styles from './Typography.module.css';

const cx = classNames.bind(styles);

export const Typography = ({
  children,
  tag = 'h2',
  size = 'md',
  color = 'light',
  centered = false,
  font = 'primary',
  bold = false,
  uppercase = false,
  preset = 'text',
  // className,
}) => {
  const Component = tag;

  const className = cx({
    [preset]: preset,
    [size]: size,
    [color]: color,
    [centered]: centered,
    [font]: font,
    uppercase,
    centered,
    bold,
    typography: true,
    // className,
  });

  return <Component className={className}>{children}</Component>;
};

Typography.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.string,
  centered: PropTypes.bool,
  font: PropTypes.string,
  uppercase: PropTypes.bool,
  preset: PropTypes.string,
};

Typography.defaultProps = {
  tag: 'h2',
  bold: false,
  font: 'primary',
  size: 'md',
  color: 'light',
  centered: false,
  uppercase: false,
  preset: 'heading2',
};
