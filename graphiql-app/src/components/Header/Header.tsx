import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

import classes from './Header.module.scss';

export const Header = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${isSticky ? classes['header__sticky'] : ''}`}>
      <div className={classes.container}>
        <div className={classes['header-inner']}>
          <Link to="/">
            <div className={classes.logo}>
              <Typography variant="h5" component="span">
                GraphiQL
              </Typography>
            </div>
          </Link>
          <nav>{props.children}</nav>
        </div>
      </div>
    </header>
  );
};
