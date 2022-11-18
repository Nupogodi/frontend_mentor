import React from 'react';
import { Routes, Route } from 'react-router-dom';

// constants
import { ROUTES } from 'utils/constants';

// Pages
import { Home } from 'pages';

// styles
import 'assets/styles/main.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.home.url} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
