import { FC } from "react";
import Expenses from "./expenses/Expenses";
import { Wrapper } from "../styled-components/layout.styles";
import { ToogleThemeButton } from "./common/Buttons";
import { useThemeContext } from "../contexts/ThemeContext";

const Layout: FC = () => {
  const { changeCurrentTheme, theme } = useThemeContext();

  return (
    <Wrapper>
      <Expenses />
      <ToogleThemeButton theme={theme} onClick={changeCurrentTheme} />
    </Wrapper>
  );
};

export default Layout;
