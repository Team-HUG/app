import React, { useState } from 'react';

const MenuDetail = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-6 w-[650px] h-[500px] bg-white rounded-[10px] shadow-[0_4px_9px_0px_rgba(0,0,0,0.15)] py-12 px-6">
      <div className="w-[60%] h-full flex flex-col items-between gap-3">
        <img className="h-[55%]" src="/menuExample.png" alt="메뉴 이미지" />
        <div className="w-full flex flex-col gap-3">
          <div className="text-right mr-4 text-gray5 text-[22px] font-regular">모짜렐라치즈카츠 (4pcs)</div>
          <div className="text-right mr-4 text-orange1 text-[20px] font-medium">12,500원</div>
          <hr className="w-full" />
          <div className="w-full text-center px-5 whitespace-normal">설명</div>
        </div>
      </div>
      <div className="w-[40%] h-full flex flex-col justify-between text-right">
        <div className="h-[55%] text-gray5 text-[22px] font-regular">모짜렐라치즈카츠 (4pcs)</div>
        <div className="text-gray5 text-[20px]">합계 12,500원</div>
        <div className="flex justify-between">
          <button
            className="w-12 h-12 rounded-[10px] text-[25px] font-regular shadow-[0_4px_7px_0px_rgba(0,0,0,0.10)]"
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          >
            -
          </button>
          <span className="font-medium text-3xl">{count}</span>
          <button
            className="w-12 h-12 rounded-[10px] text-[25px] font-regular shadow-[0_4px_7px_0px_rgba(0,0,0,0.10)]"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="w-full py-3 text-gray0 bg-orange1 rounded-[10px] text-[26px] font-medium">담기</button>
      </div>
    </div>
  );
};

export default MenuDetail;
