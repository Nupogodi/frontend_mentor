import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// styles
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({
  children,
  centered,
  disabled,
  bgColor,
  onClick,
  type = 'button',
  styled = 'button',
}) => {
  const className = cx({
    btn: styled === 'button',
    wrapper: styled === 'wrapper',
    [bgColor]: true,
    disabled,
    centered,
  });

  const [btnWidth, setBtnWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setBtnWidth(ref.current.clientWidth);
  }, []);

  return (
    <button
      ref={ref}
      className={className}
      style={{ height: `${btnWidth}px` }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  centered: PropTypes.bool,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  styled: PropTypes.string,
};

Button.defaultProps = {
  centered: false,
  disabled: false,
  type: 'button',
  styled: 'button',
  bgColor: 'light',
};
