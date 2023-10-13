import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return <img className="w-full h-screen" src="/main.png" alt="main" onClick={() => navigate('/order')} />;
};

export default Main;
