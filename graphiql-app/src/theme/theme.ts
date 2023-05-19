import { createTheme } from '@mui/material/styles';
import Colors from './colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.PRIMARY_MAIN,
      dark: Colors.PRIMARY_DARK,
      light: Colors.PRIMARY_LIGHT,
      contrastText: Colors.PRIMARY_CONTR_TEXT,
    },
    secondary: {
      main: Colors.SECONDARY_MAIN,
      dark: Colors.SECONDARY_DARK,
      contrastText: Colors.SECONDARY_CONTR_TEXT,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: Colors.PRIMARY_DARK,
          color: Colors.PRIMARY_CONTR_TEXT,
          boxShadow: 'none',
          WebkitBoxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: Colors.PRIMARY_DARK,
          color: Colors.PRIMARY_CONTR_TEXT,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: Colors.SECONDARY_MAIN,
          '&:hover': {
            textShadow: '0px 0px 10px #00FF00',
            filter: `drop-shadow(10px 10px 30px ${Colors.SECONDARY_HOVER})`,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: Colors.SECONDARY_MAIN,
          fill: 'red',
          '&:hover': {
            textShadow: `0px 0px 10px ${Colors.SECONDARY_HOVER}`,
            filter: `drop-shadow(0px 0px 10px ${Colors.SECONDARY_HOVER})`,
            transition:
              'color 2s ease-in-out, text-shadow 0.2s ease-in-out, filter 0.2s ease-in-out',
          },
          transition: 'color 2s ease-in-out, text-shadow 0.2s ease-in-out, filter 0.2s ease-in-out',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: Colors.SECONDARY_MAIN,
          filter: `drop-shadow(0px 0px 1px rgba(250,250,250,0.1))`,
          '&:hover': {
            filter: `drop-shadow(0px 0px 5px ${Colors.SECONDARY_HOVER})`,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          maxHeight: '40px',
          height: '40px',
          backgroundColor: 'inherit',
          '@media (min-width: 600px)': {
            minHeight: 'inherit',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});
export default theme;
