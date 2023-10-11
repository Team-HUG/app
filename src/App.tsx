import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
