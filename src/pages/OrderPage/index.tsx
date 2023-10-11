import { useState } from 'react';
import ArrowOpenIcon from '../../assets/ArrowOpenIcon';
import Menu from '../../components/Menu';
import OderHeader from '../../components/OrderHeader';
import * as S from './style';
import ArrowCloseIcon from '../../assets/ArrowCloseIcon';
import ShoppingBasket from '../../components/ShoppingBasket';

const OrderPage = () => {
  const [isOpenShoppingList, setIsOpenShoppingList] = useState(false);

  return (
    <S.OrderPageContainer>
      {!isOpenShoppingList && (
        <div
          onClick={() => setIsOpenShoppingList(!isOpenShoppingList)}
          className=" w-12 h-24 cursor-pointer rounded-s-xl bg-orange1 fixed right-0 top-1/2 flex justify-center items-center"
        >
          <ArrowCloseIcon />
        </div>
      )}
      <OderHeader />
      <Menu />
      {isOpenShoppingList && (
        <div className=" fixed cursor-pointer flex right-0 items-center">
          <div
            onClick={() => setIsOpenShoppingList(!isOpenShoppingList)}
            className=" w-12 h-24 rounded-s-xl bg-orange1 fixed right-[500px] top-1/2 flex justify-center items-center"
          >
            <ArrowOpenIcon />
          </div>
          <ShoppingBasket />
        </div>
      )}
    </S.OrderPageContainer>
  );
};

export default OrderPage;
