import Menu from '../../components/Menu';
import OderHeader from '../../components/OrderHeader';
import * as S from './style';

const OrderPage = () => {
  return (
    <S.OrderPageContainer>
      <OderHeader />
      <Menu />
    </S.OrderPageContainer>
  );
};

export default OrderPage;
