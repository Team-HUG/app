import { instance } from '../api';
import useModal from '../hooks/useModal';
import isOpenStore from '../store/isOpen.store';
import shoppingStore from '../store/shopping.store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IncludeEvent } from '../atoms/atom';

interface CartList {
  cartId: 0;
  foodId: 0;
  foodName: string;
  price: number;
  isEvent: boolean;
  imageUrl: string;
  quantity: number;
}

const ShoppingBasket = () => {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingStore);
  const { openModal, closeModal } = useModal();
  const [isOpen, setIsOpen] = useRecoilState(isOpenStore);
  const { data } = useQuery(['cartlist'], async () => {
    return await instance.get<CartList[]>(`api/cart/food/list`);
  });
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const setIncludeEvent = useSetRecoilState(IncludeEvent);

  const { mutate } = useMutation(
    async () => {
      return await instance.post(`api/cart/submit/order`);
    },
    {
      onSuccess: () => {
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
        setTimeout(() => {
          closeModal();
          navigate('/prepare');
        }, 2000);
        queryClient.invalidateQueries(['cartlist']);
      },
    },
  );

  const onPaymentClick = async () => {
    if (data?.data.length === 0) return toast.warning('음식을 담아주세요');
    mutate();
    if (data?.data.some((item) => item.isEvent === true)) setIncludeEvent(true);
  };

  return (
    <div className="flex flex-col bg-white items-center justify-between w-[500px] mx-auto h-screen rounded-[10px] shadow-[0_4px_9px_0px_rgba(0,0,0,0.15)] px-10">
      <header className="text-[35px] pt-10 font-semiBold text-gray4">장바구니</header>
      <div className="flex flex-col gap-[35px] w-full h-[60%] overflow-scroll py-5">
        {data?.data.map((order) => (
          <OrderedList key={order.cartId} {...order} />
        ))}
      </div>
      <footer className="w-full pb-20">
        <div className="flex justify-between items-end">
          <div className="font-medium text-[23px]">
            총 {data?.data.length || 0}가지{' '}
            {data?.data.reduce(function (sum, obj) {
              return sum + obj.quantity;
            }, 0) || 0}
            개
          </div>
          <div className="font-bold text-orange1 text-[32px]">
            총{' '}
            {`${
              data?.data.reduce(function (sum, obj) {
                if (obj.hasOwnProperty('price')) {
                  return sum + obj.price * obj.quantity;
                }
                return sum;
              }, 0) || 0
            }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </div>
        </div>
        <div className="flex justify-between w-full gap-[5%]">
          <button
            className="w-[30%] h-[70px] text-[26px] font-semiBold text-white rounded-[10px] bg-gray2"
            onClick={() => setIsOpen(false)}
          >
            초기화
          </button>
          <button
            onClick={onPaymentClick}
            className="w-[70%] h-[70px] text-[26px] font-semiBold text-white rounded-[10px] bg-orange1"
          >
            주문하기
          </button>
        </div>
      </footer>
    </div>
  );
};

const OrderedList = ({ foodName, foodId, price, quantity, cartId }: CartList) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    async () => {
      return await instance.delete(`api/cart/food/delete/${cartId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cartlist']);
      },
    },
  );

  const { mutate: add_order } = useMutation(
    async (current: number) => {
      return await instance.post(`api/cart/food/add`, { foodId, quantity: current });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cartlist']);
      },
    },
  );

  return (
    <div className="flex flex-col w-full gap-3.5 px-2">
      <div className="flex justify-between items-center">
        <div className="font-medium text-gray5 text-[20px]">{foodName}</div>
        <button
          onClick={() => mutate()}
          className="border-orange1 font-semiBold border-[1px] px-[15px] py-[6px] text-gray4 rounded-[5px]"
        >
          삭제
        </button>
      </div>
      <span className="text-orange1 text-right text-[22px] font-bold">
        {`${price * quantity}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </span>
      <div className="flex justify-between">
        <button
          className="w-12 h-12 rounded-[10px] text-[25px] font-regular shadow-[0_4px_7px_0px_rgba(0,0,0,0.10)]"
          onClick={() => {
            quantity > 1 && add_order(quantity - 1);
          }}
        >
          -
        </button>
        <span className="font-medium text-3xl">{quantity}</span>
        <button
          className="w-12 h-12 rounded-[10px] text-[25px] font-regular shadow-[0_4px_7px_0px_rgba(0,0,0,0.10)]"
          onClick={() => {
            add_order(quantity + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
