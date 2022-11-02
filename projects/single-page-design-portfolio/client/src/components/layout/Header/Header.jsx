import React from 'react';

// components
import { Heading, Text } from 'components/';

// styles
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={`${styles.header} textContainer textCenter`}>
      <Heading tag='h2' size='lg'>
        Design solutions made easy
      </Heading>
      <Text tag='p' size='md'>
        With over ten years of experience in various design disciplines, I'm
        your one-stop shop for your design needs.
      </Text>
    </header>
  );
}
