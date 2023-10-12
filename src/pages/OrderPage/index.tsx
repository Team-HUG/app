import Menu from '../../components/Menu';
import OderHeader from '../../components/OrderHeader';
import * as S from './style';
import ArrowCloseIcon from '../../assets/ArrowCloseIcon';
import ShoppingBasket from '../../components/ShoppingBasket';
import TableBar from '../../components/atoms/TableBar';
import { useRecoilState } from 'recoil';
import isOpenStore from '../../store/isOpen.store';
import ArrowOpenIcon from '../../assets/ArrowOpenIcon';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderPage = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenStore);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info('메인으로 이동합니다');
      navigate('/');
    }, 300000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full">
      <TableBar name="주문" />
      <S.OrderPageContainer>
        {!isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-24 cursor-pointer rounded-s-xl bg-orange1 fixed right-0 top-1/2 flex justify-center items-center"
          >
            <ArrowCloseIcon />
          </div>
        )}
        <OderHeader />
        <Menu />
        {isOpen && (
          <div className=" fixed cursor-pointer flex right-0 items-center">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" w-12 h-24 cursor-pointer rounded-s-xl bg-orange1 right-0 top-1/2 flex justify-center items-center"
            >
              <ArrowOpenIcon />
            </div>
            <ShoppingBasket />
          </div>
        )}
      </S.OrderPageContainer>
    </div>
  );
};

export default OrderPage;
