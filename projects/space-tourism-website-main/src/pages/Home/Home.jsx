import React from 'react';

// components
import { Navbar } from 'components';

// sections
import { Introduction } from './sections/Introduction/Introduction';

// styles
import styles from './Home.module.css';

export const Home = () => (
    <div className={styles.home}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className='container padded'>
        <main>
          <Introduction />
        </main>
      </div>
    </div>
  )
