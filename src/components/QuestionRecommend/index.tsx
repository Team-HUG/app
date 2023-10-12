import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const QuestionRecommend = ({ setIsStart }: any) => {
  const navigate = useNavigate();
  return (
    <S.QuestionReocmmendPageContainer>
      <S.QuestionRecommendMessageBox>
        <img src="/Character.png" alt="우리의 마스코트" />
        <h1>
          무엇을 먹어야 할 지 <span>고민</span> 되시나요?
        </h1>
        <span>AI가 고객님의 취향을 반영해 메뉴를 추천해 줍니다</span>
        <S.QuestionRecommendButtonContainer>
          <div onClick={() => navigate('/order')}>돌아가기</div>
          <div onClick={() => setIsStart(false)}>지금 하러가기</div>
        </S.QuestionRecommendButtonContainer>
      </S.QuestionRecommendMessageBox>
    </S.QuestionReocmmendPageContainer>
  );
};

export default QuestionRecommend;
