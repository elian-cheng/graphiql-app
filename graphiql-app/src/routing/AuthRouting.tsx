import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, NotFound, Welcome } from '../pages';

function AuthRouting() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AuthRouting;
