import { Link } from 'react-router-dom';
import { Header } from '../../Header';

import { Button } from '@mui/material';
import { useAuth } from '../../../../contexts/Auth.context';

const NonAuthHeader = () => {
  const { signUp } = useAuth();

  return (
    <Header>
      <Link to="/sign-in">
        <Button variant="text" size="small" color="inherit" onClick={() => signUp(false)}>
          Log In
        </Button>
      </Link>
      <Button
        href="#"
        variant="outlined"
        size="small"
        color="inherit"
        onClick={() => signUp(true)}
        sx={{ marginLeft: '15px' }}
      >
        Sign Up
      </Button>
    </Header>
  );
};

export default NonAuthHeader;
