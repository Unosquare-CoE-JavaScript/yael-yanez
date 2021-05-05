import { fireEvent, render } from "@testing-library/react";
import ExpensesContextProvider, {
  ExpensesContext,
} from "../../contexts/ExpensesContext";
import type { Expense } from "../../data/expenses";

const newExpense: Expense = {
  id: "uuid1",
  title: "New expense",
  amount: 12345,
  date: "2020-05-21",
};

describe("Expenses Provider", () => {
  it("Expenses List has some default expenses items", () => {
    const { getByText } = render(
      <ExpensesContextProvider>
        <ExpensesContext.Consumer>
          {(value) => (
            <span>Current expenses items: {value.expenses.length}</span>
          )}
        </ExpensesContext.Consumer>
      </ExpensesContextProvider>
    );

    expect(getByText("Current expenses items: 4")).toBeTruthy();
  });

  describe(".addExpense", () => {
    it("should add a new expense to the current list", () => {
      const { getByText } = render(
        <ExpensesContextProvider>
          <ExpensesContext.Consumer>
            {(value) => (
              <>
                <span>Current expenses items: {value.expenses.length}</span>
                <button onClick={() => value.addExpense(newExpense)}>
                  Add expense
                </button>
              </>
            )}
          </ExpensesContext.Consumer>
        </ExpensesContextProvider>
      );

      fireEvent.click(getByText("Add expense"));

      expect(getByText("Current expenses items: 5")).toBeTruthy();
    });
  });
});
