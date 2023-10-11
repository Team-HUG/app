import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardGamePage from './pages/CardGamePage';
import OrderPage from './pages/OrderPage';
import Prepare from './pages/Prepare';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/card-game" element={<CardGamePage />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
