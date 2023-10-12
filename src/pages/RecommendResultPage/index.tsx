import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RecommendData } from '../../atoms/atom';
import TableBar from '../../components/atoms/TableBar';
import * as S from './style';

const RecommendResultPage = () => {
  const recommendData = useRecoilValue(RecommendData);
  const navigate = useNavigate();

  return (
    <>
      <TableBar name="메뉴추천" />
      <S.ReocmmendResultPageContainer>
        <S.RecommendResultMessageBox>
          <h1>
            이 <span>메뉴</span>는 어떠세요?
          </h1>
          <h2>고객님의 취향을 바탕으로 추천된 메뉴입니다</h2>
        </S.RecommendResultMessageBox>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
          <S.ResultBoxContainer>
            {recommendData.map((recommend) => (
              <S.ResultBox key={recommend.id}>
                <S.ResultViewImgBox img_url={recommend.imageUrl} />
                <span>{recommend.foodName}</span>
                <span>{`${recommend.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')} 원`}</span>
              </S.ResultBox>
            ))}
          </S.ResultBoxContainer>
          <S.ResultButtonBoxContainer>
            <div>장바구니</div>
            <div onClick={() => navigate('/order')}>돌아가기</div>
          </S.ResultButtonBoxContainer>
        </div>
      </S.ReocmmendResultPageContainer>
    </>
  );
};

export default RecommendResultPage;
