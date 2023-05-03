import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import styles from './AuthLayout.module.scss';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

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
