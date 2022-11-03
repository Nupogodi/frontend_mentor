import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// constants
import { BTN_COLORS } from './constants';

// styles
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({
  children,
  circle,
  disabled,
  bgColor = BTN_COLORS.dark,
  onClick,
}) => {
  const [btnWidth, setBtnWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setBtnWidth(ref.current.clientWidth);
  }, []);

  const className = cx({
    btn: true,
    [bgColor]: true,
    circle,
    disabled,
  });

  return (
    <button
      style={{ height: circle ? `${btnWidth}px` : 'auto' }}
      ref={ref}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  circle: PropTypes.bool,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};
