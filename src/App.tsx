import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import Prepare from './pages/Prepare';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/" element={<div />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
