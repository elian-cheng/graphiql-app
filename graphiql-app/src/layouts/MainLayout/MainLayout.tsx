import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <div className={styles['main-container']}>
      <Outlet />
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default MainLayout;
