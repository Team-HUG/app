import React, { useEffect, useState } from 'react';
import TableBar from '../components/atoms/TableBar';
import { useNavigate } from 'react-router-dom';

const AdminGameList = () => {
  const [a, b] = useState('이벤트 클리어 목록');
  const navigate = useNavigate();

  useEffect(() => {
    if (a === '주문 신청 목록') navigate('/admin/game-list');
  }, [a]);

  return (
    <div className=" w-full h-[70vh] flex flex-col">
      <TableBar name="주문 목록" />
      <section className=" w-full h-full px-16 flex flex-col mt-10 gap-12">
        <div className="flex gap-4">
          <span
            style={{
              color: a === '주문 신청 목록' ? 'black' : 'gray',
            }}
            className={' font-extrabold text-3xl'}
            onClick={() => navigate('/admin/order-list')}
          >
            주문 신청 목록
          </span>
          <span
            style={{
              color: a === '이벤트 클리어 목록' ? 'black' : 'gray',
            }}
            className=" font-extrabold text-3xl"
            onClick={() => b('이벤트 클리어 목록')}
          >
            이벤트 클리어 목록
          </span>
        </div>
        <main className="flex flex-col border-t-[1px] border-[#ccc] pt-4 gap-6">
          {/* */}
          <hgroup className=" flex items-center gap-10">
            <div className=" flex gap-2 items-center">
              <span className=" font-medium text-2xl">3번 테이블</span>
              <span className=" font-medium text-lg text-[gray]">· 12분 전</span>
            </div>
            <div className=" flex items-center gap-6 ml-auto">
              <button className=" w-fit py-2 px-8 font-bold rounded-md text-lg text-white bg-orange1">확인</button>
            </div>
          </hgroup>
          {/* */}
          <div className=" flex flex-col gap-2">
            <div className=" flex items-center gap-6 w-full h-fit bg-white py-6 shadow-md bg-opacity-10 px-6">
              <div className=" flex flex-col">
                <span className=" font-medium text-xl">이벤트 게임을 클리어했어요!</span>
              </div>
            </div>
          </div>
          {/* */}
        </main>
      </section>
    </div>
  );
};

export default AdminGameList;
