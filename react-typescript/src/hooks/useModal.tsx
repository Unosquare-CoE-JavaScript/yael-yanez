import { useModalContext } from "../contexts/ModalContext";

const useModal = () => {
  const { isOpen, closeModal, renderModal } = useModalContext();
  return { isOpen, closeModal, renderModal };
};

export default useModal;
