import { createContext, useState, FC } from "react";
import { expenses } from "../data/expenses";
import type { Expense } from "../data/expenses";
import type { ExpensesContextState } from "../types/types";

const contextDefaultValues: ExpensesContextState = {
  expenses,
  addExpense: () => {},
};

export const ExpensesContext = createContext<ExpensesContextState>(
  contextDefaultValues
);

const ExpensesContextProvider: FC = ({ children }) => {
  const [expenses, setExpenses] = useState(contextDefaultValues.expenses);

  const addExpense = (newExpense: Expense) =>
    setExpenses((expenses) => [...expenses, newExpense]);

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
