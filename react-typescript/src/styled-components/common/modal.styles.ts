import styled from "styled-components";

interface WrapperProps {
  width?: string;
  height?: string;
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContainer = styled.div<WrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || "60%"};
  height: ${({ height }) => height || "60%"};
  background-color: #25262c;
  box-shadow: 0px 0px 20px rgba(37, 38, 44, 1);
  border-radius: 20px;
  padding: 30px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 30.9px;
  right: 30px;
  cursor: pointer;
  font-size: 25px;
  background-color: transparent;
  color: white;
  border: none;
`;
