import { FC, SyntheticEvent, useState } from "react";
import TextInput from "../common/TextInput";
import { v4 as uuidv4 } from "uuid";
import {
  Wrapper,
  Title,
  Form,
} from "../../styled-components/expenses/addExpenseForm.styles";
import { PrimaryButton } from "../common/Buttons";
import { useExpenseContext } from "../../contexts/ExpensesContext";
import { Expense } from "../../data/expenses";
import useModal from "../../hooks/useModal";

const AddExpenseForm: FC = (): JSX.Element => {
  const { closeModal } = useModal();
  const { addExpense } = useExpenseContext();
  const [expense, setExpense] = useState<Expense>({
    id: uuidv4(),
    title: "",
    amount: 0,
    date: "",
  });

  function onValueChanged(id: string, value: string) {
    setExpense((prevState) => ({ ...prevState, [id]: value }));
  }

  function onFormSubmit(event: SyntheticEvent) {
    event.preventDefault();

    addExpense(expense);
    closeModal();
  }

  return (
    <Wrapper>
      <Title>New expense</Title>

      <Form onSubmit={onFormSubmit}>
        <TextInput
          label="Title"
          value={expense.title}
          type="text"
          id="title"
          onValueChanged={onValueChanged}
          required
        />
        <TextInput
          label="Amount"
          value={expense.amount}
          type="number"
          id="amount"
          onValueChanged={onValueChanged}
          required
        />
        <TextInput
          label="Date"
          value={expense.date}
          type="date"
          id="date"
          onValueChanged={onValueChanged}
          required
        />
        <PrimaryButton
          text="Add expense"
          type="submit"
          width="100%"
          onClick={() => {}}
        />
      </Form>
    </Wrapper>
  );
};

export default AddExpenseForm;
