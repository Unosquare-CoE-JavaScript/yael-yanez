import { FC } from "react";
import { formatDate } from "../../utils/formatDate";
import type { Expense } from "../../data/expenses";
import {
  Wrapper,
  Title,
  Date,
  ExpenseValue,
} from "../../styled-components/expenses/expensesItem.styles";

interface Props {
  expense: Expense;
}

const ExpenseItem: FC<Props> = ({ expense: { title, date, amount } }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Date>{formatDate(date)}</Date>
    <ExpenseValue>{`$${amount}`}</ExpenseValue>
  </Wrapper>
);

export default ExpenseItem;
