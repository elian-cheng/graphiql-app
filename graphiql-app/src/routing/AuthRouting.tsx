import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, NotFound, Welcome } from '../pages';
import { AuthLayout, MainLayout } from '../layouts';

function AuthRouting() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AuthRouting;
