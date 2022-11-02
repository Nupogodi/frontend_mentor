// components
import { Navbar, Heading, Text, Item, ServiceGrid, About } from 'components/';

// styles
import 'assets/styles/main.css';
import styles from './App.module.css';

function App() {
  return (
    <div className='App'>
      <Navbar tag='nav' />
      <main>
        <div className='paddedContainer'>
          <header className={`${styles.header} textContainer textCenter`}>
            <Heading tag='h2' size='lg'>
              Design solutions made easy
            </Heading>
            <Text tag='p' size='md'>
              With over ten years of experience in various design disciplines,
              I'm your one-stop shop for your design needs.
            </Text>
          </header>
          <section className={`${styles.section} ${styles.services}`}>
            <ServiceGrid />
          </section>
          <section className={`${styles.section} ${styles.about}`}>
            <About />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
