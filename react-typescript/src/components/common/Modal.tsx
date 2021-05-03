import { FC, SyntheticEvent } from "react";
import Portal from "./Portal";
import {
  Wrapper,
  ModalContainer,
  Overlay,
  CloseIcon,
} from "../../styled-components/common/modal.styles";
import useModal from "../../hooks/useModal";

interface Props {
  width?: string;
  height?: string;
}

const Modal: FC<Props> = ({ children, width, height }): JSX.Element | null => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  function onBackgroundClick(event: SyntheticEvent) {
    event.stopPropagation();
    closeModal();
  }

  return (
    <Portal>
      <Wrapper>
        <ModalContainer width={width} height={height}>
          <CloseIcon onClick={closeModal}>×</CloseIcon>
          {children}
        </ModalContainer>
        <Overlay onClick={onBackgroundClick} />
      </Wrapper>
    </Portal>
  );
};

export default Modal;
