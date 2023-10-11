import React from 'react';
import TableBar from '../components/atoms/TableBar';

const AdminOrderList = () => {
  return (
    <div className=" w-full h-[100vh] flex flex-col">
      <TableBar name="주문 목록" />
      <section className=" w-full h-full px-16 flex flex-col mt-10 gap-12">
        <span className=" font-extrabold text-3xl">주문 신청 목록</span>

        <main className="flex flex-col border-t-[1px] border-[#ccc] pt-4 gap-6">
          {/* */}
          <hgroup className=" flex items-center gap-10">
            <div className=" flex gap-2 items-center">
              <span className=" font-medium text-2xl">#36번째 주문</span>
              <span className=" font-medium text-lg text-[gray]">· 12분 전</span>
            </div>
            <div className=" flex items-center gap-6 ml-auto">
              <span className=" font-medium text-lg">3번 테이블</span>
              <button className=" w-fit py-2 px-8 font-bold rounded-md text-lg text-white bg-orange1">완료하기</button>
            </div>
          </hgroup>
          {/* */}
          <div className=" flex flex-col gap-2">
            <div className=" flex items-center gap-6 w-full h-fit bg-white py-4 shadow-md bg-opacity-10 px-6">
              <img src="/test.png" alt="food" />
              <div className=" flex flex-col">
                <span className=" font-bold text-2xl">모짜렐라치즈카츠 (4pcs)</span>
                <span className=" font-medium text-[gray] text-xl">12,500원</span>
              </div>
              <div className=" flex flex-col items-center justify-center ml-auto mr-4">
                <span className=" font-bold text-xl">수량</span>
                <span className=" font-medium text-xl text-[#777]">3</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex items-center gap-6 w-full h-fit bg-white py-4 shadow-md bg-opacity-10 px-6">
              <img src="/test.png" alt="food" />
              <div className=" flex flex-col">
                <span className=" font-bold text-2xl">모짜렐라치즈카츠 (4pcs)</span>
                <span className=" font-medium text-[gray] text-xl">12,500원</span>
              </div>
              <div className=" flex flex-col items-center justify-center ml-auto mr-4">
                <span className=" font-bold text-xl">수량</span>
                <span className=" font-medium text-xl text-[#777]">3</span>
              </div>
            </div>
          </div>
          {/* */}
        </main>
      </section>
    </div>
  );
};

export default AdminOrderList;
