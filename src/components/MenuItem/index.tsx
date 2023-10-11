import React from 'react';
import { MenusTypes } from '../Menu';
import * as S from './style';

const MenuItem = ({ data }: { data: MenusTypes }) => {
  return (
    <S.MenuItemBox>
      <S.ViewImgBox img_url={data.imageUrl} />
      <span>{data.foodName}</span>
      <span>{data.price}</span>
    </S.MenuItemBox>
  );
};

export default MenuItem;
