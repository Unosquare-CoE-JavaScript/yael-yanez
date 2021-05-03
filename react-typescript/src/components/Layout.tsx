import { FC } from "react";
import Expenses from "./expenses/Expenses";
import { Wrapper } from "../styled-components/layout.styles";

const Layout: FC = () => {
  return (
    <Wrapper>
      <Expenses />
    </Wrapper>
  );
};

export default Layout;
