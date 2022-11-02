import React from 'react';

// components
import img from 'assets/images/image-amy.webp';

// styles
import styles from './About.module.css';
import { Button, Heading } from 'components';
import { Text } from 'components/';

export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <img src={img} alt='Amy' />
      </div>
      <div className={styles.content}>
        <Heading tag='h2' size='sm'>
          I'm Amy, and I'd love to work on your next project
        </Heading>
        <Text tag='p' size='md'>
          I love working with others to create beautiful design solutions. I've
          designed everything from brand illustrations to complete mobile apps.
          I'm also handy with a camera!
        </Text>
        <Button bgColor='light'>Free Consultation</Button>
      </div>
    </div>
  );
}
