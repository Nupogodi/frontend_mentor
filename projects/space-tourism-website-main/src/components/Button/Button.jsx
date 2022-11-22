import React from 'react';
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
  className,
}) => {
  const classNameList = cx({
    btn: styled === 'button',
    wrapper: styled === 'wrapper',
    [bgColor]: true,
    disabled,
    centered,
    className,
  });

  return (
    <button
      className={classNameList}
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
