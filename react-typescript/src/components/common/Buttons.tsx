import { FC } from "react";
import LightModeIcon from "../../icons/LightModeIcon";
import DarkModeIcon from "../../icons/DarkModeIcon";
import {
  Primary,
  Secondary,
  ThemeButton,
} from "../../styled-components/common/button.styles";

interface Props {
  type: "button" | "submit" | "reset";
  text: string;
  width: string;
  onClick: () => void;
}

interface ToogleThemeButtonProps {
  onClick: () => void;
  theme: boolean;
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

export const ToogleThemeButton: FC<ToogleThemeButtonProps> = ({
  onClick,
  theme,
}) => (
  <ThemeButton onClick={onClick}>
    {theme ? <LightModeIcon /> : <DarkModeIcon />}
  </ThemeButton>
);
