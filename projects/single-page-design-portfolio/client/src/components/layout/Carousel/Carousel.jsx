import React, { useState, useEffect } from 'react';

// components
import { Button, Slide } from 'components';
import { ReactComponent as ArrowLeft } from 'assets/images/icon-arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/images/icon-arrow-right.svg';

// styles
import styles from './Carousel.module.css';

export function Carousel({ slides = [], show = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(slides.length);

  useEffect(() => {
    setLength(slides.length);
  }, [slides]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.carousel}>
      <ul
        className={styles.list}
        style={{
          transform: `translateX(-${(currentIndex * 100) / show}%)`,
        }}
      >
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={styles.slide}
            style={{ minWidth: `${100 / show}%` }}
          />
        ))}
      </ul>
      <div className={styles.controls}>
        <Button
          disabled={currentIndex === 0}
          bgColor='dark'
          circle
          onClick={prev}
        >
          <ArrowLeft />
        </Button>
        <Button
          disabled={currentIndex >= (length - 1) / show}
          bgColor='dark'
          circle
          onClick={next}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
