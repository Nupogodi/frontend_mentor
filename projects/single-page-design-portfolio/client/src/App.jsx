// constants
import { SERVICE_LIST } from 'utils/constants';
import { SLIDES } from 'components/layout/Carousel/constants';

// components
import {
  Navbar,
  Header,
  ServiceGrid,
  About,
  Carousel,
  Heading,
  Subscribe,
} from 'components/';

// styles
import 'assets/styles/main.css';
import styles from './App.module.css';

function App() {
  return (
    <div className='App'>
      <Navbar tag='nav' />
      <main>
        <div className='padded container'>
          <Header />
          <section className={`${styles.section} ${styles.services}`}>
            <ServiceGrid data={SERVICE_LIST} />
          </section>
          <section className={`${styles.section} ${styles.about}`}>
            <About />
          </section>
        </div>
        <section className={`${styles.section} ${styles.portfolio}`}>
          <Heading centered tag='h2' size='sm' color='dark'>
            My Work
          </Heading>
          <Carousel slides={SLIDES} show={3} />
        </section>
        <div className='padded container'>
          <Subscribe />
        </div>
      </main>
      <Navbar tag='footer' />
    </div>
  );
}

export default App;
