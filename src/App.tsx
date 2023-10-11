import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prepare from './pages/Prepare';
import AdminOrderList from './pages/AdminOrderList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/prepare" element={<Prepare />} />
        <Route path="/admin/order" element={<AdminOrderList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
