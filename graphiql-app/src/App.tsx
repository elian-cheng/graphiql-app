import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useThemeSwitcher } from './contexts';
import Routing from './routing';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from './theme/theme';
// import styles from './App.module.scss';

function App() {
  const { isDark } = useThemeSwitcher();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
        },
      }),
    [isDark]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
