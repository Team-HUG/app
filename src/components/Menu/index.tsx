import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { OrderName } from '../../atoms/atom';
import * as S from './style';
import MenuItem from '../MenuItem';
import { instance } from '../../api';

export interface MenusTypes {
  id: number;
  category: string;
  foodName: string;
  imageUrl: string;
  price: string;
  isEvent: boolean;
}

const Menu = () => {
  const orderName = useRecoilValue(OrderName);
  const [datas, setDatas] = useState<{ currentPage: number; hasMorePage: boolean; responseDtoList: MenusTypes[] }>();

  useEffect(() => {
    const fetch = async () => {
      console.log(1);
      const { data: categories } = await instance.get('/api/food/category/list');
      const filterdCategory = categories.category.filter((category: any) => category === orderName);
      const { data } = await instance.get(`/api/food/list?category=${filterdCategory}`);
      setDatas(data);
    };

    fetch();
  }, [orderName]);

  return (
    <S.MenuContainer>
      <S.MenuCategoryTitle>{orderName}</S.MenuCategoryTitle>
      <S.MenuListContainer>
        {datas?.responseDtoList.map((data, idx) => (
          <MenuItem key={idx} data={data} />
        ))}
      </S.MenuListContainer>
    </S.MenuContainer>
  );
};

export default Menu;
