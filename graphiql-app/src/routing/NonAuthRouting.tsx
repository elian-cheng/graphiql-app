import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound, SignIn, Welcome } from '../pages';

function NonAuthRouting() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default NonAuthRouting;
