import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import Prepare from './pages/Prepare';
import AdminOrderList from './pages/AdminOrderList';
import AdminGameList from './pages/AdminGameList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/admin/order-list" element={<AdminOrderList />} />
        <Route path="/admin/game-list" element={<AdminGameList />} />
        <Route path="/" element={<div />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
