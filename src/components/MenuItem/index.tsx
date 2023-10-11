import React from 'react';
import { MenusTypes } from '../Menu';
import * as S from './style';
import { useRecoilState } from 'recoil';
import shoppingStore from '../../store/shopping.store';

const MenuItem = ({ data }: { data: MenusTypes }) => {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingStore);

  return (
    <S.MenuItemBox
      onClick={() =>
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
                  name: data.foodName,
                  price: +data.price,
                  count: 1,
                },
              ],
        )
      }
    >
      <img src={data.imageUrl} alt="사진" />
      <span>{data.foodName}</span>
      <span>{data.price}</span>
    </S.MenuItemBox>
  );
};

export default MenuItem;
