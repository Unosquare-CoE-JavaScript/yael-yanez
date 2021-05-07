import styled from "styled-components";
import { rgba, darken } from "polished";

export const ListItems = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary.dark};
  padding: 20px 10px 20px 20px;
  width: 100%;
  height: min-content;
  max-height: 650px;
  overflow-y: scroll;
  box-shadow: 0 0 20px
    ${({ theme }) => darken(0.06, rgba(theme.primary.dark, 1))};
`;
