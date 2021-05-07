import styled from "styled-components";
import { rgba } from "polished";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.primary.light};
  border-radius: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
`;

export const Title = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

export const Date = styled.p`
  font-size: 12px;
  margin-top: 3px;
  color: ${({ theme }) => rgba(theme.primary.textColor, 0.85)};
`;

export const ExpenseValue = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.redColor};
`;
