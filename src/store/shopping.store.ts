import { atom } from 'recoil';

interface IShopping {
  id: number;
  name: string;
  price: number;
  count: number;
}

const shoppingStore = atom<Array<IShopping>>({
  key: 'shoppingStore',
  default: [],
});

export default shoppingStore;
