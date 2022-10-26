import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// constants
import { BTN_COLORS } from './constants';

// styles
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({ children, circle, bgColor = BTN_COLORS.dark }) => {
  const [btnWidth, setBtnWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setBtnWidth(ref.current.clientWidth);
  }, []);

  const className = cx({
    btn: true,
    [bgColor]: true,
    circle,
  });

  return (
    <button
      style={{ height: circle ? `${btnWidth}px` : 'auto' }}
      ref={ref}
      className={className}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  circle: PropTypes.bool,
  bgColor: PropTypes.string,
};
