import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { AuthHeader } from '../../components';

import styles from './AuthLayout.module.scss';

function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Container className={styles['container']}>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
