import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles['not-found']}>
      <div className={styles['back']}></div>
      <div className={styles['rocket']}></div>
      <div className={styles['content']}>
        <Typography variant="h2">404</Typography>
        <Typography variant="h3">Page not found</Typography>
        <NavLink className={styles['button']} to="/">
          <Button variant="contained">To Main Page</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
