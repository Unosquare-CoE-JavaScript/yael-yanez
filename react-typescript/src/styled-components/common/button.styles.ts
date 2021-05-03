import styled from "styled-components";

interface Props {
  width: string;
}

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.2s all ease-in-out;
  font-weight: bolder;
`;

export const Primary = styled(Button)<Props>`
  background: #0a84ff;
  box-shadow: 0px 0px 20px rgba(10, 132, 255, 0.5);
  width: ${({ width }) => width || "auto"};

  :hover {
    box-shadow: 0px 0px 20px rgba(10, 132, 255, 0.8);
  }

  :focus {
    box-shadow: 0px 0px 20px rgba(10, 132, 255, 0.8);
  }
`;

export const Secondary = styled(Button)<Props>`
  background: #ff9d0a;
  box-shadow: 0px 0px 20px rgba(255, 157, 10, 0.5);
  width: ${({ width }) => width || "auto"};

  :hover {
    box-shadow: 0px 0px 20px rgba(255, 157, 10, 0.8);
  }

  :focus {
    box-shadow: 0px 0px 20px rgba(255, 157, 10, 0.8);
  }
`;
