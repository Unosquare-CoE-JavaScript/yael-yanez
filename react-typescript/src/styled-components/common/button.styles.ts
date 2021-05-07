import styled from "styled-components";
import { rgba } from "polished";

interface Props {
  width: string;
}

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 10px;
  transition: 0.2s all ease-in-out;
  font-weight: bolder;
`;

export const Primary = styled(Button)<Props>`
  color: ${({ theme }) => theme.primaryContrast.textColor};
  background: ${({ theme }) => theme.primaryContrast.dark};
  box-shadow: 0px 0px 20px
    ${({ theme }) => rgba(theme.primaryContrast.dark, 0.5)};
  width: ${({ width }) => width || "auto"};

  :hover {
    box-shadow: 0px 0px 20px
      ${({ theme }) => rgba(theme.primaryContrast.dark, 0.8)};
  }

  :focus {
    box-shadow: 0px 0px 20px
      ${({ theme }) => rgba(theme.primaryContrast.dark, 0.8)};
  }
`;

export const Secondary = styled(Button)<Props>`
  color: ${({ theme }) => theme.secondaryContrast.textColor};
  background: ${({ theme }) => theme.secondaryContrast.dark};
  box-shadow: 0px 0px 20px
    ${({ theme }) => rgba(theme.secondaryContrast.dark, 0.5)};
  width: ${({ width }) => width || "auto"};

  :hover {
    box-shadow: 0px 0px 20px
      ${({ theme }) => rgba(theme.secondaryContrast.dark, 0.8)};
  }

  :focus {
    box-shadow: 0px 0px 20px
      ${({ theme }) => rgba(theme.secondaryContrast.dark, 0.8)};
  }
`;

export const ThemeButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  padding: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0;
  background-color: #6a5ff2;
  fill: white;
  box-shadow: 0px 0px 20px
    ${({ theme }) => rgba(theme.secondaryContrast.dark, 0.5)};
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 20px
      ${({ theme }) => rgba(theme.secondaryContrast.dark, 0.8)};
  }

  :focus {
    box-shadow: 0px 0px 20px
      ${({ theme }) => rgba(theme.secondaryContrast.dark, 0.8)};
  }
`;
