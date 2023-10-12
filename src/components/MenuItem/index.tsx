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
      {data.isEvent && (
        <div className=" absolute h-fit flex items-center gap-1 mr-44 mt-32">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5973 15C11.419 15 11.2417 14.9428 11.089 14.8289L7.50009 12.1385L3.91113 14.8289C3.76244 14.9407 3.58374 15.0006 3.40056 14.9999C3.21738 14.9993 3.03909 14.9381 2.89114 14.8252C2.74305 14.713 2.63259 14.5548 2.57548 14.3731C2.51837 14.1915 2.51752 13.9956 2.57305 13.8134L3.91157 9.29779L0.354822 6.67795C0.207417 6.56424 0.0979459 6.40496 0.0418926 6.22264C-0.0141608 6.04033 -0.0139588 5.84421 0.0424702 5.66202C0.0993442 5.48027 0.209422 5.32181 0.357147 5.20901C0.504871 5.09622 0.682771 5.03481 0.865703 5.03346L5.27083 5.02654L6.67333 0.62295C6.73121 0.441542 6.84222 0.283765 6.99064 0.171963C7.13906 0.060161 7.31737 0 7.50031 0C7.68326 0 7.86156 0.060161 8.00998 0.171963C8.1584 0.283765 8.26941 0.441542 8.32729 0.62295L9.70597 5.02654L14.1336 5.03346C14.3167 5.03454 14.4949 5.09592 14.6428 5.20888C14.7907 5.32184 14.9007 5.48064 14.9573 5.66271C15.0139 5.84478 15.0142 6.04087 14.9581 6.22312C14.9021 6.40538 14.7925 6.56452 14.6449 6.67795L11.0882 9.29779L12.4267 13.8134C12.4823 13.9956 12.4816 14.1914 12.4246 14.3731C12.3675 14.5547 12.2571 14.713 12.109 14.8252C11.9606 14.939 11.7813 15.0002 11.5973 15Z"
              fill="#FFC32A"
            />
          </svg>
        </div>
      )}
      <span>{data.foodName}</span>
      <span>{`${data.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ', ')}원</span>
    </S.MenuItemBox>
  );
};

export default MenuItem;
