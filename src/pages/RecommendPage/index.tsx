import { useState } from 'react';
import TableBar from '../../components/atoms/TableBar';
import QuestionRecommend from '../../components/QuestionRecommend';
import RecommendMenu from '../../components/RecommendMenu';

const RecommendPage = () => {
  const [isStart, setIsStart] = useState(true);

  return (
    <>
      <TableBar name="메뉴추천" />
      {isStart && <QuestionRecommend setIsStart={setIsStart} />}
      {!isStart && <RecommendMenu />}
    </>
  );
};

export default RecommendPage;
