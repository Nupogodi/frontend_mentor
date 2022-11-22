import React from 'react';

// components
import { Button, Typography } from 'components';

// styles
import styles from './Introduction.module.css';

export const Introduction = () => (
  <section className={styles.introduction}>
    <div className={styles.textContainer}>
      <Typography tag='h2' preset='heading5'>
        So, you want to travel to
      </Typography>
      <Typography tag='h2' preset='heading1'>
        Space
      </Typography>
      <Typography color='accent' preset='text' tag='p'>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Typography>
    </div>
    <div>
      <Button onClick={() => {}} centered>
        Explore
      </Button>
    </div>
  </section>
);
