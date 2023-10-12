import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { instance } from '../../api';
import { OrderName } from '../../atoms/atom';
import * as S from './style';
import useModal from '../../hooks/useModal';

const OderHeader = () => {
  const [orderName, setOrderName] = useRecoilState(OrderName);
  const [headerData, setHeaderData] = useState<{ category: string[] }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      const { data: category } = await instance.get('/api/food/category/list');
      setHeaderData(category);
    };

    fetchCategory();
  }, []);

  const { openModal, closeModal } = useModal();

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
          <S.ToRecommendButton onClick={() => navigate('/recommend')}>메뉴추천</S.ToRecommendButton>
          <S.EmployeeButton
            onClick={() => {
              openModal({
                component: (
                  <div className=" w-96 h-32 border-2 rounded-md border-white flex justify-center items-center">
                    <span className=" font-bold text-lg text-white text-center">
                      직원 호출이 완료되었습니다.
                      <br />
                      잠시만 기다려주세요.
                    </span>
                  </div>
                ),
              });
              setTimeout(() => {
                closeModal();
              }, 2000);
            }}
          >
            직원호출
          </S.EmployeeButton>
        </S.AnotherButtonContainer>
      </S.OrderHeaderContainer>
    </div>
  );
};

export default OderHeader;
