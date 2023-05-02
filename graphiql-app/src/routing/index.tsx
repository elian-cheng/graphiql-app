import React, { useContext } from 'react';
import AuthContext from '../store/authContext';
import AuthRouting from './AuthRouting';
import NonAuthRouting from './NonAuthRouting';

function Routing() {
  const authCtx = useContext(AuthContext);

  return <>{authCtx.isLoggedIn ? <AuthRouting /> : <NonAuthRouting />}</>;
}

export default Routing;
