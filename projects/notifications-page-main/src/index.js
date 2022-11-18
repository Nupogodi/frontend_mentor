import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// context
import { NotificationsProvider } from 'context/notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </React.StrictMode>
);
