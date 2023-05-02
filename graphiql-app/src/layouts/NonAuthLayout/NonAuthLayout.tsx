import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import styles from './NonAuthLayout.module.scss';

function NonAuthLayout() {
  return (
    <Container className={styles['container']}>
      <Outlet />
    </Container>
  );
}

export default NonAuthLayout;
