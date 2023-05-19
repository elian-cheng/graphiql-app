import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useThemeSwitcher } from './contexts';
import Routing from './routing';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colors from './theme/colors';

function App() {
  const { isDark } = useThemeSwitcher();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          secondary: {
            main: Colors.SECONDARY_MAIN,
          },
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
