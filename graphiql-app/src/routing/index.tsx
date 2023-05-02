import React, { useState } from 'react';
import AuthRouting from './AuthRouting';
import NonAuthRouting from './NonAuthRouting';

function Routing() {
  const [isAuth] = useState(true);

  return <>{isAuth ? <AuthRouting /> : <NonAuthRouting />}</>;
}

export default Routing;
