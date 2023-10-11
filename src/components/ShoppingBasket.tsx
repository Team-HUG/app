import { instance } from '../api';
import useModal from '../hooks/useModal';
import shoppingStore from '../store/shopping.store';
import { useRecoilState, useSetRecoilState } from 'recoil';

const ShoppingBasket = () => {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingStore);
  const { openModal, closeModal } = useModal();

  const onPaymentClick = async () => {
    shoppingList.map(async (item) => {
      await instance.post('/api/cart/food/add', {
        foodId: item.id,
        quantity: item.count,
      });
    });

    openModal({
      component: (
        <div className=" w-96 h-32 border-2 rounded-md border-white flex justify-center items-center">
          <span className=" font-bold text-lg text-white text-center">
            주문이 정상적으로 처리되었습니다 !<br />
            필요하신게 있다면 직원을 호출해주세요.
          </span>
        </div>
      ),
    });
    setShoppingList([]);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="flex flex-col bg-white items-center justify-between w-[500px] mx-auto h-screen rounded-[10px] shadow-[0_4px_9px_0px_rgba(0,0,0,0.15)] px-10">
      <header className="text-[35px] pt-10 font-semiBold text-gray4">장바구니</header>
      <div className="flex flex-col gap-[35px] w-full h-full max-h-[60%] overflow-scroll py-5">
        {shoppingList.map((order) => (
          <OrderedList key={order.name} {...order} />
        ))}
      </div>
      <footer className="w-full pb-10">
        <div className="flex justify-between items-end">
          <div className="font-medium text-[23px]">
            총 {shoppingList.length}가지{' '}
            {shoppingList.reduce(function (sum, obj) {
              if (obj.hasOwnProperty('count')) {
                return sum + obj.count;
              }
              return sum;
            }, 0)}
            개
          </div>
          <div className="font-bold text-orange1 text-[32px]">
            총{' '}
            {`${shoppingList.reduce(function (sum, obj) {
              if (obj.hasOwnProperty('price')) {
                return sum + obj.price * obj.count;
              }
              return sum;
            }, 0)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </div>
        </div>
        <div className="flex justify-between w-full gap-[5%]">
          <button className="w-[30%] h-[70px] text-[26px] font-semiBold text-white rounded-[10px] bg-gray2">
            닫기
          </button>
          <button
            onClick={onPaymentClick}
            className="w-[70%] h-[70px] text-[26px] font-semiBold text-white rounded-[10px] bg-orange1"
          >
            결제하기
          </button>
        </div>
      </footer>
    </div>
  );
};

const OrderedList = ({ name, count, price }: { name: string; count: number; price: number }) => {
  const setOrder = useSetRecoilState(shoppingStore);

  return (
    <div className="flex flex-col w-full gap-3.5 px-2">
      <div className="flex justify-between items-center">
        <div className="font-medium text-gray5 text-[20px]">{name}</div>
        <button
          onClick={() => setOrder((prev) => prev.filter((x) => x.name !== name))}
          className="border-orange1 font-semiBold border-[1px] px-[15px] py-[6px] text-gray4 rounded-[5px]"
        >
          삭제
        </button>
      </div>
      <span className="text-orange1 text-right text-[22px] font-bold">
        {`${price * count}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </span>
      <div className="flex justify-between">
        <button
          className="w-12 h-12 rounded-[10px] text-[25px] font-regular shadow-[0_4px_7px_0px_rgba(0,0,0,0.10)]"
          onClick={() => {
            setOrder((prev) =>
              prev.map((x) => {
                if (x.name === name && x.count > 1)
                  return {
                    id: x.id,
                    name: x.name,
                    price: x.price,
                    count: x.count - 1,
                  };
                return x;
              }),
            );
          }}
        >
          -
        </button>
        <span className="font-medium text-3xl">{count}</span>
        <button
          className="w-12 h-12 rounded-[10px] text-[25px] font-regular shadow-[0_4px_7px_0px_rgba(0,0,0,0.10)]"
          onClick={() => {
            setOrder((prev) =>
              prev.map((x) => {
                if (x.name === name && x.count < 20)
                  return {
                    id: x.id,
                    name: x.name,
                    price: x.price,
                    count: x.count + 1,
                  };
                return x;
              }),
            );
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
