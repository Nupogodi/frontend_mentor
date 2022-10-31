// components
import { Navbar, Heading, Text, Item, ServiceGrid } from 'components/';

// styles
import 'assets/styles/main.css';
import styles from './App.module.css';

function App() {
  return (
    <div className='App'>
      <Navbar tag='nav' />
      <main className={styles.main}>
        <div className='paddedContainer'>
          <header className={`${styles.header} textContainer`}>
            <Heading tag='h2' size='lg'>
              Design solutions made easy
            </Heading>
            <Text tag='p' size='md'>
              With over ten years of experience in various design disciplines,
              I'm your one-stop shop for your design needs.
            </Text>
          </header>
          <section className={`${styles.sectionOne}`}>
            <ServiceGrid />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

// Q's
// 1. Where to store constants - JS or CSS
//
//
//

// ToDO
// 1. refactor grid to grid-area
// 2. extract section content into Grid component
//
