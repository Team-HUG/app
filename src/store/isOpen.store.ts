import { atom } from 'recoil';

const isOpenStore = atom({
  key: 'isOpenStore',
  default: false,
});

export default isOpenStore;
