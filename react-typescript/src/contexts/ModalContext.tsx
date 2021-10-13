import { createContext, FC, useContext, useState } from "react";
import type { ModalContextState } from "../types/types";

const contextDefaultValues: ModalContextState = {
  isOpen: false,
  renderModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext<ModalContextState>(
  contextDefaultValues
);

const ModalContextProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(contextDefaultValues.isOpen);

  const renderModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, renderModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;
