import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/authContext';

import classes from './AuthHeader.module.scss';

const AuthHeader = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>GraphiQL</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Go to Main Page</Link>
          </li>
          <li>
            <Link to="/graphiql">GraphiQL</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthHeader;
