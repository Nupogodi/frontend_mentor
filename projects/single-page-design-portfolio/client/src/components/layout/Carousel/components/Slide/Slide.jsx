import React from 'react';

// styles
import styles from './Slide.module.css';

export function Slide({ src, alt, id, className, style }) {
  return (
    <li style={style} className={`${styles.slide} ${className}`} key={id}>
      <img src={src} alt={alt} />
    </li>
  );
}
