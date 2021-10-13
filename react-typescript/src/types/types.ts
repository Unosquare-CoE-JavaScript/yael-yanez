import type { Expense } from "../data/expenses";

export type ExpensesContextState = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
};

export type ModalContextState = {
  isOpen: boolean;
  renderModal: () => void;
  closeModal: () => void;
};

export type ThemeContextState = {
  theme: boolean;
  changeCurrentTheme: () => void;
};
