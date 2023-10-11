import { atom } from 'recoil';
import IModalState from '../interfaces/modal.interface';

const modalStore = atom<IModalState>({
  key: 'modalStore',
  default: {
    component: null,
    visible: false,
  },
});

export default modalStore;
