import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <NavLink to="/welcome">
        <Button variant="contained">To Welcome</Button>
      </NavLink>
    </div>
  );
}

export default NotFound;
