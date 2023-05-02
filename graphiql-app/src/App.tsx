import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';

// import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
