import React, { useEffect, useState } from 'react';
import TableBar from '../components/atoms/TableBar';
import { instance } from '../api';
import { toast } from 'react-toastify';

const AdminOrderList = () => {
  const [안녕얘들아, 반가워ㅎㅎ] = useState<any>();
  const [로딩다됐엉, 로딩바꾸깅] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get('/api/order');
      반가워ㅎㅎ(data);
      로딩바꾸깅(true);
    })();
  }, []);

  const complete = async (id: number) => {
    반가워ㅎㅎ(안녕얘들아.filter((x: any) => x.id !== id));
    await instance.patch(`/api/order/change/complete/${id}`).then(() => toast.success('주문이 완료되었습니다'));
  };

  return (
    <div className=" w-full min-h-[100vh] flex flex-col pb-20">
      <TableBar name="주문 목록" />
      <section className=" w-full h-full px-16 flex flex-col mt-10 gap-12">
        <span className=" font-extrabold text-3xl">주문 신청 목록</span>
        {로딩다됐엉 && (
          <>
            {안녕얘들아.map((vnvvnv: any) => (
              <main className="flex flex-col border-t-[1px] border-[#ccc] pt-4 gap-6">
                {/* */}
                <hgroup className=" flex items-center gap-10">
                  <div className=" flex gap-2 items-center">
                    <span className=" font-medium text-2xl">#{vnvvnv.id}번째 주문</span>
                    <span className=" font-medium text-lg text-[gray]">· {vnvvnv.orderTime}</span>
                  </div>
                  <div className=" flex items-center gap-6 ml-auto">
                    <span className=" font-medium text-lg">{vnvvnv.tableNumber}번 테이블</span>
                    <button
                      onClick={() => complete(vnvvnv.id)}
                      className=" w-fit py-2 px-8 font-bold rounded-md text-lg text-white bg-orange1"
                    >
                      완료하기
                    </button>
                  </div>
                </hgroup>
                {/* */}
                {vnvvnv.responseDtoList.map((d: any) => (
                  <div className=" flex flex-col gap-2">
                    <div className=" flex items-center gap-6 w-full h-32 bg-white py-4 shadow-md bg-opacity-10 px-6">
                      <img src={d.imageUrl} alt="food" className=" w-fit h-[100%]" />
                      <div className=" flex flex-col">
                        <span className=" font-bold text-2xl">{d.foodName}</span>
                        <span className=" font-medium text-[gray] text-xl">
                          {`${d.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </span>
                      </div>
                      <div className=" flex flex-col items-center justify-center ml-auto mr-4">
                        <span className=" font-bold text-xl">수량</span>
                        <span className=" font-medium text-xl text-[#777]">{d.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* */}
              </main>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default AdminOrderList;
