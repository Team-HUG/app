import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ProgressIcon from '../assets/ProgressIcon';
import { IncludeEvent } from '../atoms/atom';
import TableBar from '../components/atoms/TableBar';

const Prepare = () => {
  const navigate = useNavigate();
  const includeEvent = useRecoilValue(IncludeEvent);

  return (
    <div className=" w-full h-[100vh] flex flex-col">
      <section id="headline" className="flex flex-col">
        <TableBar name="조리중" />
      </section>
      <section id="main" className=" w-full h-full flex flex-col justify-center items-center gap-20">
        <div className=" w-fit">
          <img src="/Character.png" className=" w-20 left-[40%] absolute mt-[-100px]" alt="bot" />
          <ProgressIcon />
        </div>
        <div className=" flex flex-col justify-center items-center gap-3">
          <span className=" font-extrabold text-4xl">조리 준비 중</span>
          <span className=" font-medium text-2xl text-[#666]">
            {includeEvent
              ? '게임을 통해 최고기록을 깨고 서비스를 받아가세요 !'
              : '이벤트 메뉴를 주문하면 게임을 통해 서비스를 받을 수 있어요 !'}
          </span>
        </div>
        <div className=" flex gap-8">
          <button
            className=" flex justify-center items-center bg-[#BABABA] w-52 rounded-md py-4 text-white font-bold text-xl"
            onClick={() => navigate('/order')}
          >
            돌아가기
          </button>
          {includeEvent && (
            <button
              className=" flex justify-center items-center bg-[#FB4F00] w-52 rounded-md py-4 text-white font-bold text-xl"
              onClick={() => navigate('/select-game')}
            >
              게임하고 사은품 받기
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Prepare;
