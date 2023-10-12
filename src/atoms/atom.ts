import { atom } from 'recoil';

export const OrderName = atom({ key: 'OrderName', default: '돈카츠' });

export const RecommendData = atom({
  key: 'RecommendData',
  default: [
    {
      category: '',
      foodName: '',
      price: 0,
      imageUrl: '',
      isEvent: true,
      id: 0,
    },
  ],
});

export const IncludeEvent = atom<boolean>({
  key: 'IncludeEvent',
  default: false,
});
