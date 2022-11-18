import React from 'react';
import { Button, Navbar, Typography } from 'components';

// styles
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={` ${styles.home} container`}>
      <Navbar />
      <main>
        <section className={styles.introduction}>
          <div className={styles.textContainer}>
            <Typography
              color='light'
              tag='h2'
              size='xxs'
              font='secondary'
              letterSpacing={2.7}
              uppercase
            >
              So, you want to travel to
            </Typography>

            <Typography
              color='light'
              tag='h2'
              size='xl'
              font='secondary'
              uppercase
            >
              Space
            </Typography>
            <Typography color='accent' tag='p' size='xxs' font='primary'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Typography>
          </div>
          <div>
            <Button onClick={() => {}} centered>
              Explore
            </Button>
          </div>
        </section>
       
      </main>
    </div>
  );
}
