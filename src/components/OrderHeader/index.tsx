import React from 'react';
import { useRecoilState } from 'recoil';
import { headerData } from '../../assets/headerData';
import { OrderName } from '../../atoms/atom';
import * as S from './style';

const OderHeader = () => {
  const [orderName, setOrderName] = useRecoilState(OrderName);

  return (
    <div
      style={{
        width: '20vw',
        height: '84vh',
      }}
    >
      <S.OrderHeaderContainer>
        {headerData.map((data) => (
          <S.OrderHeaderItemBox
            key={data.id}
            current={data.name}
            clicked={orderName}
            onClick={() => setOrderName(data.name)}
          >
            {data.name}
          </S.OrderHeaderItemBox>
        ))}
        <S.AnotherButtonContainer>
          <S.CartButton>장바구니</S.CartButton>
          <S.EmployeeButton>직원호출</S.EmployeeButton>
        </S.AnotherButtonContainer>
      </S.OrderHeaderContainer>
    </div>
  );
};

export default OderHeader;
