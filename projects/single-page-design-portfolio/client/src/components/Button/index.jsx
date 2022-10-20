import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

// constants
import { BTN_COLORS } from 'utils/constants';

// styles
import styles from './Button.module.css';

const cx = classNames.bind(styles);

const Button = ({ children, circle, bgColor = BTN_COLORS.dark }) => {
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

export default Button;
