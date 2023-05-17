import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts';
import { setupStore } from './redux/store';
import './i18n.ts';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={setupStore()}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
