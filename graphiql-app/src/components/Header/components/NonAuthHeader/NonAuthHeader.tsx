import { NavLink } from 'react-router-dom';
import Header from '../../Header';
import * as Icons from '@mui/icons-material';

import { Box, MenuItem, Menu } from '@mui/material';
import { useAuth } from '../../../../contexts/Auth.context';

const NonAuthHeader = () => {
  const { signUp } = useAuth();

  return (
    <Header>
      <Box
        component={'ul'}
        sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <MenuItem>
          <NavLink to="/">
            <Icons.Home sx={{ verticalAlign: 'middle' }} />
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/sign-in" onClick={() => signUp(false)}>
            Login
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/sign-in#" onClick={() => signUp(true)}>
            Sign Up
          </NavLink>
        </MenuItem>
      </Box>
    </Header>
  );
};

export default NonAuthHeader;
