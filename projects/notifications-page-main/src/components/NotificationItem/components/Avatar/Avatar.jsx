import React from 'react';
import PropTypes from 'prop-types';
export function Avatar({ src = '', alt = '', className = {} }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
