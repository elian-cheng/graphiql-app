import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';

import { Button } from '@mui/material';

const NonAuthHeader = () => {
  return (
    <Header>
      <Link to="/sign-in">
        <Button variant="text" size="small" color="inherit">
          Log In
        </Button>
      </Link>
      <Link to="/sign-in">
        <Button variant="outlined" size="small" color="inherit">
          Sign Up
        </Button>
      </Link>
    </Header>
  );
};

export default NonAuthHeader;
