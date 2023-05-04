import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import { Header } from '../Header/Header';
import LogoutIcon from '@mui/icons-material/Logout';

import classes from './AuthHeader.module.scss';

const AuthHeader = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Header>
      <Link to="/sign-in">
        <LogoutIcon color="inherit" />
      </Link>
    </Header>
  );
};

export default AuthHeader;
