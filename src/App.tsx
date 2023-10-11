import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prepare from './pages/Prepare';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
