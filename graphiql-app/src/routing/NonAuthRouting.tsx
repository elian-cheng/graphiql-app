import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound, SignIn, Welcome } from '../pages';
import { MainLayout, NonAuthLayout } from '../layouts';

function NonAuthRouting() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<NonAuthLayout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default NonAuthRouting;
