// constants
import { SERVICE_LIST } from 'utils/constants';

// components
import { Navbar, Header, ServiceGrid, About } from 'components/';

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
      </main>
    </div>
  );
}

export default App;
