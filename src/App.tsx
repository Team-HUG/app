import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardGamePage from './pages/CardGamePage';
import OrderPage from './pages/OrderPage';
import Prepare from './pages/Prepare';
import AdminOrderList from './pages/AdminOrderList';
import AdminGameList from './pages/AdminGameList';
import FindWrongPicture from './pages/FindWrongPicture';
import Main from './pages/Main';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './components/common/modal';
import RecommendPage from './pages/RecommendPage';

const App = () => {
  return (
    <BrowserRouter>
      <StyledToastify autoClose={1000} position={toast.POSITION.TOP_RIGHT} theme="colored" />
      <Modal />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/card-game" element={<CardGamePage />} />
        <Route path="/admin/order-list" element={<AdminOrderList />} />
        <Route path="/admin/game-list" element={<AdminGameList />} />
        <Route path="/game/find-wrong" element={<FindWrongPicture />} />
        <Route path="/prepare" element={<Prepare />} />
        <Route path="/recommend" element={<RecommendPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
