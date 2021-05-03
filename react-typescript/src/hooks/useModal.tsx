import { useState, useCallback, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const useModal = () => {
  const { isOpen, closeModal, renderModal } = useContext(ModalContext);
  return { isOpen, closeModal, renderModal };
};

export default useModal;
