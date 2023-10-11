import React, { useState } from 'react';

const ShoppingBasket = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[500px] mx-auto h-screen rounded-[10px] shadow-[0_4px_9px_0px_rgba(0,0,0,0.15)] px-10">
      <header className="text-[35px] mr-40 pt-3 font-semiBold text-gray4">장바구니</header>
      <div className="flex flex-col gap-[35px] w-full max-h-[60%] overflow-scroll py-5">
        <OrderedList />
        <OrderedList />
        <OrderedList />
      </div>
      <footer className="w-full pb-10">
        <div className="flex justify-between items-end">
          <div className="font-medium text-[23px]">1가지 3개</div>
          <div className="font-bold text-orange1 text-[32px]">총 12,500원</div>
        </div>
        <div className="flex justify-between w-full gap-[5%]">
          <button className="w-[30%] h-[70px] text-[26px] font-semiBold text-white rounded-[10px] bg-gray2">
            닫기
          </button>
          <button className="w-[70%] h-[70px] text-[26px] font-semiBold text-white rounded-[10px] bg-orange1">
            결제하기
          </button>
        </div>
      </footer>
    </div>
  );
};

const OrderedList = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col w-full gap-3.5 px-2">
      <div className="flex justify-between items-center">
        <div className="font-medium text-gray5 text-[20px]">모짜렐라치즈카츠 (4pcs)</div>
        <button className="border-orange1 font-semiBold border-[1px] px-[15px] py-[6px] text-gray4 rounded-[5px]">
          삭제
        </button>
      </div>
      <span className="text-orange1 text-right text-[22px] font-bold">12,500원</span>
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
    </div>
  );
};

export default ShoppingBasket;
