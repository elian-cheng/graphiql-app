import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import styles from './AuthLayout.module.scss';

function AuthLayout() {
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <Container className={styles['container']}>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
