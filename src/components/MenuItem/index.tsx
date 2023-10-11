import React from 'react';
import { MenusTypes } from '../Menu';
import * as S from './style';
import { useRecoilState } from 'recoil';
import shoppingStore from '../../store/shopping.store';
import { toast } from 'react-toastify';

const MenuItem = ({ data }: { data: MenusTypes }) => {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingStore);

  const onMenuItemClick = () => {
    setShoppingList(
      shoppingList.map((x) => x.name).includes(data.foodName)
        ? shoppingList.map((x) =>
            x.name === data.foodName
              ? {
                  ...x,
                  count: x.count + 1,
                }
              : x,
          )
        : [
            ...shoppingList,
            {
              id: data.id,
              name: data.foodName,
              price: +data.price,
              count: 1,
            },
          ],
    );
    toast.info(<h1>메뉴가 추가되었어요!</h1>);
  };

  return (
    <S.MenuItemBox onClick={onMenuItemClick}>
      <S.ViewImgBox img_url={data.imageUrl} />
      <span>{data.foodName}</span>
      <span>{data.price}</span>
    </S.MenuItemBox>
  );
};

export default MenuItem;
