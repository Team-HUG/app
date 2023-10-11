import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { OrderName } from '../../atoms/atom';
import * as S from './style';
import MenuItem from '../MenuItem';
import { instance } from '../../api';

export interface MenusTypes {
  category: string;
  foodName: string;
  imageUrl: string;
  price: string;
}

const Menu = () => {
  const orderName = useRecoilValue(OrderName);
  const [datas, setDatas] = useState<{ currentPage: number; hasMorePage: boolean; responseDtoList: MenusTypes[] }>();

  useEffect(() => {
    const fetch = async () => {
      const { data: categorys } = await instance.get('/api/food/category/list');
      const filterdCategory = categorys.category.filter((category: any) => category === orderName);
      console.log(filterdCategory);
      const { data } = await instance.get(`/api/food/list?category=${filterdCategory}`);
      setDatas(data);
    };

    fetch();
  }, []);

  console.log(datas);

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
