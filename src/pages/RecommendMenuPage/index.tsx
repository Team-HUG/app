import React, { useState } from 'react';
import TableBar from '../../components/atoms/TableBar';
import RecommendLoading from '../../components/RecommendLoading';
import RecommendMenu from '../../components/RecommendMenu';

const RecommendMenuPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <TableBar name="메뉴추천" />
      {isLoading ? <RecommendLoading /> : <RecommendMenu />}
    </>
  );
};

export default RecommendMenuPage;
