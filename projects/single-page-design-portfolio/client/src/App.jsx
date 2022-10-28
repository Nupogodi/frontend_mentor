// components
import { Heading, Text } from 'components/';

// styles
import 'assets/styles/main.css';

function App() {
  return (
    <div className='App'>
      <Heading tag='h2' size='lg' color='light'>
        Heading L
      </Heading>
      <Heading tag='h2' size='md'>
        Heading M
      </Heading>
      <Heading tag='h2' size='sm'>
        Heading S
      </Heading>
      <Text tag='p' size='md' color='light'>
        Body M
      </Text>
    </div>
  );
}

export default App;
