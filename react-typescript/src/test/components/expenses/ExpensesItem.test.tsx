import "../../setupTests";
import { render } from "@testing-library/react";
import ExpenseItem from "../../../components/expenses/ExpensesItem";
import type { Expense } from "../../../data/expenses";
import { formatDate } from "../../../utils/formatDate";

const expense: Expense = {
  id: "1",
  title: "Test Expense",
  amount: 12345,
  date: "2021-05-27",
};

describe("<ExpenseItem /> Component", () => {
  it("should render the correct data", () => {
    const { getByText } = render(<ExpenseItem expense={expense} />);

    expect(getByText(expense.title)).toBeInTheDocument();
    expect(getByText(`$${expense.amount}`)).toBeInTheDocument();
    expect(getByText(formatDate(expense.date))).toBeInTheDocument();
  });
});
