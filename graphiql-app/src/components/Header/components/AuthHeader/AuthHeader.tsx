import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../../contexts';
import { Header } from '../../Header';
import LogoutIcon from '@mui/icons-material/Logout';

const AuthHeader = () => {
  const authCtx = useAuth();
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Header>
      <Link to="/sign-in" onClick={() => logoutHandler()}>
        <LogoutIcon color="inherit" />
      </Link>
    </Header>
  );
};

export default AuthHeader;