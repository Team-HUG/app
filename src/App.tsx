import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prepare from './pages/Prepare';
import OrderPage from './pages/OrderPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
