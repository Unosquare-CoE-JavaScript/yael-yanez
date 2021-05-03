import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-size: 12px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #363943;
  padding: 10px;
  color: white;
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
    filter: invert(1);
  }

  ::-webkit-datetime-edit-year-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-month-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
    color: transparent;
  }

  :focus {
    background-color: #363943;
    border: 1px solid #0a84ff;
  }
`;
