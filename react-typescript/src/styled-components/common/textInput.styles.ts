import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primary.light};
  padding: 10px;
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
  outline: none;
  transition: 0.2s all ease-in-out;
  font-family: sans-serif;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(0);
  }

  ::-webkit-datetime-edit-year-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-month-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
    color: red;
  }

  :focus {
    background-color: ${({ theme }) => theme.primary.light};
    border: 1px solid ${({ theme }) => theme.primaryContrast.dark};
  }
`;
