import { FC } from "react";
import ExpensesList from "./ExpensesList";
import Modal from "../common/Modal";
import AddExpenseForm from "./AddExpenseForm";
import useModal from "../../hooks/useModal";
import { useExpenseContext } from "../../contexts/ExpensesContext";
import {
  Wrapper,
  TitleContainer,
  Title,
} from "../../styled-components/expenses/expenses.styles";
import { PrimaryButton } from "../common/Buttons";

const Expenses: FC = (): JSX.Element => {
  const { expenses } = useExpenseContext();
  const { renderModal } = useModal();

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Expenses</Title>
        <PrimaryButton
          text="Add"
          type="button"
          width="auto"
          onClick={renderModal}
        />
      </TitleContainer>
      <ExpensesList expenses={expenses} />

      <Modal width="30%" height="50%">
        <AddExpenseForm />
      </Modal>
    </Wrapper>
  );
};

export default Expenses;
