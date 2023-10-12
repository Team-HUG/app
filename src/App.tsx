import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardGamePage from './pages/CardGamePage';
import OrderPage from './pages/OrderPage';
import Prepare from './pages/Prepare';
import AdminOrderList from './pages/AdminOrderList';
import AdminGameList from './pages/AdminGameList';
import FindWrongPicture from './pages/FindWrongPicture';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/card-game" element={<CardGamePage />} />
        <Route path="/admin/order-list" element={<AdminOrderList />} />
        <Route path="/admin/game-list" element={<AdminGameList />} />
        <Route path="/game/find-wrong" element={<FindWrongPicture />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
