import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './store/authContext';
import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
