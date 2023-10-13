import React from 'react';
import * as S from './style';
import TableBar from '../../components/atoms/TableBar';
import { useNavigate } from 'react-router-dom';

const SelectGamePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TableBar name="게임선택" />
      <S.SelectGamePageContainer>
        <S.SelectGameTitle>
          원하는 <span>게임</span>을 골라주세요!
        </S.SelectGameTitle>
        <S.SelectGameContainer>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600' }}>틀린그림찾기</h2>
            <S.SelectGameBox onClick={() => navigate('/game/find-wrong')} img_url="/correct.png" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600' }}>카드(두꺼비) 찾기</h1>
            <S.SelectGameBox onClick={() => navigate('/game/jinro-card')} img_url="/SuccessJinro.png" />
          </div>
        </S.SelectGameContainer>
      </S.SelectGamePageContainer>
    </>
  );
};

export default SelectGamePage;
