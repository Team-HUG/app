import React from 'react';
import { MenusTypes } from '../Menu';
import * as S from './style';

const MenuItem = ({ data }: { data: MenusTypes }) => {
  console.log(data);
  return (
    <S.MenuItemBox>
      <S.ViewImgBox img_url={data.imageUrl} />
      {/* <img src={data.imageUrl} alt="사진" /> */}
      <span>{data.foodName}</span>
      <span>{data.price}</span>
    </S.MenuItemBox>
  );
};

export default MenuItem;
