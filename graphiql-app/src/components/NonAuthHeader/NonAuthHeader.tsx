import { Link } from 'react-router-dom';

import classes from './NonAuthHeader.module.scss';

const NonAuthHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>GraphiQL</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NonAuthHeader;
