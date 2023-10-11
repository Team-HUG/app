import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import Prepare from './pages/Prepare';
import AdminOrderList from './pages/AdminOrderList';
import AdminGameList from './pages/AdminGameList';
import styled from 'styled-components';
import Main from './pages/Main';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './components/common/modal';

const App = () => {
  return (
    <BrowserRouter>
      <StyledToastify autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
      <Modal />
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/admin/order-list" element={<AdminOrderList />} />
        <Route path="/admin/game-list" element={<AdminGameList />} />
        <Route path="/" element={<Main />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

const StyledToastify = styled(ToastContainer)``;

export default App;
