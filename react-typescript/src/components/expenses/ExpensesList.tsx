import { FC } from "react";
import ExpenseItem from "./ExpensesItem";
import type { Expense } from "../../data/expenses";
import { ListItems } from "../../styled-components/expenses/expensesList.styles";

interface Props {
  expenses: Expense[];
}

const ExpensesList: FC<Props> = ({ expenses }): JSX.Element => (
  <ListItems>
    {expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ))}
  </ListItems>
);

export default ExpensesList;
