import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

type MemberProps = {
  name: string;
  link: string;
};

function Member(props: MemberProps) {
  return (
    <Box sx={{ paddingTop: '8px', paddingRight: '30px' }}>
      <Link href={props.link} style={{ display: 'inline-flex' }} color={theme.palette.primary.main}>
        <GitHub />
        <Typography variant="body1" component="span" sx={{ paddingLeft: '15px' }}>
          {props.name}
        </Typography>
      </Link>
    </Box>
  );
}

export default Member;
