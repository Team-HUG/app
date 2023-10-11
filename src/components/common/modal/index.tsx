import { useRecoilState } from 'recoil';
import ModalView from './View';
import useModal from '../../../hooks/useModal';
import modalStore from '../../../store/modal.store';

export default function Modal() {
  const [modal] = useRecoilState(modalStore);
  const { closeModal } = useModal();

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.();
        if (!modal.menualClose) {
          closeModal();
        }
      }}
    />
  );
}
