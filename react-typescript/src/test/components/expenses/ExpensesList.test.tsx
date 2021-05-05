import "../../setupTests";
import { render, screen } from "@testing-library/react";
import ExpensesList from "../../../components/expenses/ExpensesList";
import type { Expense } from "../../../data/expenses";

const expenses: Expense[] = [
  {
    id: "1",
    title: "Test Expense",
    amount: 12345,
    date: "2021-05-27",
  },
  {
    id: "2",
    title: "Test Expense",
    amount: 12345,
    date: "2021-05-27",
  },
];

describe("<ExpensesList /> Component", () => {
  it("should render the correct amount of <ExpenseItem /> items", () => {
    render(<ExpensesList expenses={expenses} />);
    const expenseItems = screen.getAllByText("Test Expense");

    expect(expenseItems).toHaveLength(2);
  });
});
