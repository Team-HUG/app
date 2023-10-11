import React from 'react';
import { MenusTypes } from '../Menu';
import * as S from './style';

const MenuItem = ({ data }: { data: MenusTypes }) => {
  return (
    <S.MenuItemBox>
      <img src={data.imageUrl} alt="사진" />
      <span>{data.foodName}</span>
      <span>{data.price}</span>
    </S.MenuItemBox>
  );
};

export default MenuItem;
