import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../contexts';
import { Header } from '../../Header';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

const AuthHeader = () => {
  const authCtx = useAuth();
  const { t } = useTranslation();

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Header>
      <Link to="/">
        <Button variant="text" size="small" color="inherit">
          {t('home')}
        </Button>
      </Link>
      <Link to="/graphiql">
        <Button variant="text" size="small" color="inherit" sx={{ marginLeft: '15px' }}>
          {t('editor')}
        </Button>
      </Link>
      <Link to="/sign-in" onClick={() => logoutHandler()} style={{ marginLeft: '15px' }}>
        <LogoutIcon color="inherit" />
      </Link>
    </Header>
  );
};

export default AuthHeader;
