import styled from "styled-components";

export const Wrapper = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;
