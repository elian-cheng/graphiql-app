import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import styles from './NonAuthLayout.module.scss';
import NonAuthHeader from '../../components/NonAuthHeader/NonAuthHeader';

function NonAuthLayout() {
  return (
    <>
      <NonAuthHeader />
      <Container className={styles['container']}>
        <Outlet />
      </Container>
    </>
  );
}

export default NonAuthLayout;
