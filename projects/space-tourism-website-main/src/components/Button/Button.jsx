import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// styles
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({
  children,
  circle,
  disabled,
  bgColor,
  onClick,
  type = 'button',
  styled = 'button',
}) => {
  const [btnWidth, setBtnWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setBtnWidth(ref.current.clientWidth);
  }, []);

  const className = cx({
    btn: styled === 'button',
    wrapper: styled === 'wrapper',
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
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  circle: PropTypes.bool,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  styled: PropTypes.string,
};

Button.defaultProps = {
  circle: false,
  disabled: false,
  type: 'button',
  styled: 'button',
  bgColor: 'dark',
};
