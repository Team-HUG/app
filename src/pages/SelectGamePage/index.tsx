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
          <S.SelectGameBox onClick={() => navigate('/game/find-wrong')} img_url="/correct.png" />
          <S.SelectGameBox onClick={() => navigate('/game/jinro-card')} img_url="/SuccessJinro.png" />
        </S.SelectGameContainer>
      </S.SelectGamePageContainer>
    </>
  );
};

export default SelectGamePage;
