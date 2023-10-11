import React from 'react';
import ProgressIcon from '../assets/ProgressIcon';

const Prepare = () => {
  return (
    <div className=" w-full h-[100vh] flex flex-col">
      <section id="headline" className="flex flex-col">
        <div className=" w-full h-[6px] bg-[#FB4F00]" />
        <div className=" w-24 h-10 bg-[#FB4F00] ml-auto rounded-b-xl flex items-center justify-center">
          <span className=" font-bold text-xl text-white mt-[-2px]">조리중</span>
        </div>
      </section>
      <section id="main" className=" w-full h-full flex flex-col justify-center items-center gap-20">
        <div className=" w-fit">
          <img src="/bot.png" className=" w-20 left-[40%] absolute mt-[-100px]" />
          <ProgressIcon />
        </div>
        <div className=" flex flex-col justify-center items-center gap-3">
          <span className=" font-extrabold text-4xl">조리 준비 중</span>
          <span className=" font-medium text-2xl text-[#666]">게임을 통해 최고기록을 깨고 서비스를 받아가세요 !</span>
        </div>
        <div className=" flex gap-8">
          <button className=" flex justify-center items-center bg-[#BABABA] w-52 rounded-md py-4 text-white font-bold text-xl">
            돌아가기
          </button>
          <button className=" flex justify-center items-center bg-[#FB4F00] w-52 rounded-md py-4 text-white font-bold text-xl">
            게임하고 사은품 받기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Prepare;