import { FC } from "react";
import {
  Primary,
  Secondary,
} from "../../styled-components/common/button.styles";

interface Props {
  type: "button" | "submit" | "reset";
  text: string;
  width: string;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = ({ type, text, onClick, width }) => (
  <Primary type={type} onClick={onClick} width={width}>
    {text}
  </Primary>
);

export const SecondaryButton: FC<Props> = ({ type, text, onClick, width }) => (
  <Secondary type={type} onClick={onClick} width={width}>
    {text}
  </Secondary>
);
