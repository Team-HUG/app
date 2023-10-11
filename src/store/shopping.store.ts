import { atom } from 'recoil';

interface IShopping {
  name: string;
  price: number;
  count: number;
}

const shoppingStore = atom<Array<IShopping>>({
  key: 'shoppingStore',
  default: [
    { name: '모짜렐라치즈카츠 (4pcs)', price: 12500, count: 1 },
    { name: '이이이이이이이잉 (4pcs)', price: 99900, count: 1 },
    { name: '꾜요요요요요요용 (4pcs)', price: 12500, count: 1 },
  ],
});

export default shoppingStore;
