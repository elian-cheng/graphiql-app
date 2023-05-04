import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { NonAuthHeader } from '../../components';

import styles from './NonAuthLayout.module.scss';

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
