import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { instance } from '../../api';
import { OrderName } from '../../atoms/atom';
import * as S from './style';

const OderHeader = () => {
  const [orderName, setOrderName] = useRecoilState(OrderName);
  const [headerData, setHeaderData] = useState<{ category: string[] }>();

  useEffect(() => {
    const fetchCategory = async () => {
      const { data: category } = await instance.get('/api/food/category/list');
      setHeaderData(category);
    };

    fetchCategory();
  }, []);

  return (
    <div
      style={{
        width: '20vw',
        height: '84vh',
      }}
    >
      <S.OrderHeaderContainer>
        {headerData?.category.map((data, idx) => (
          <S.OrderHeaderItemBox key={idx} current={data} clicked={orderName} onClick={() => setOrderName(data)}>
            {data}
          </S.OrderHeaderItemBox>
        ))}
        <S.AnotherButtonContainer>
          <S.EmployeeButton>직원호출</S.EmployeeButton>
        </S.AnotherButtonContainer>
      </S.OrderHeaderContainer>
    </div>
  );
};

export default OderHeader;
