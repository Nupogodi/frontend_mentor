import React from 'react';

// styles
import styles from './Subscribe.module.css';
import { Button, Heading, Text } from 'components/';

export function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <div className={`${styles.content} textContainer`}>
        <Heading tag='h2' size='sm' color='light'>
          Book a call with me
        </Heading>
        <Text tag='p' size='md' color='light'>
          I'd love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </Text>
      </div>
      <Button bgColor='light'>Free Consultation</Button>
    </div>
  );
}
