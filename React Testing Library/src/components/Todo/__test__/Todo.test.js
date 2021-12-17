import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe('<Todo /> Component Tests', () => {
  describe('Functionality', () => {
    it('should add one task to the tasks list', () => {
      const { getByPlaceholderText, getByRole, getByText } = render(
        <MockTodo />
      );

      const inputElement = getByPlaceholderText('Add a new task here...');
      const buttonElement = getByRole('button');

      fireEvent.change(inputElement, { target: { value: 'Buy food' } });
      expect(inputElement.value).toBe('Buy food');

      fireEvent.click(buttonElement);
      expect(inputElement.value).toBe('');

      const taskElement = getByText('Buy food');
      expect(taskElement).toBeInTheDocument();
    });

    it('should add many tasks to the tasks list', () => {
      const { getByPlaceholderText, getByRole, getAllByTestId } = render(
        <MockTodo />
      );

      const inputElement = getByPlaceholderText('Add a new task here...');
      const buttonElement = getByRole('button');

      fireEvent.change(inputElement, { target: { value: 'Buy food' } });
      fireEvent.click(buttonElement);

      fireEvent.change(inputElement, { target: { value: 'Rent a movie' } });
      fireEvent.click(buttonElement);

      const tasksElements = getAllByTestId('task-container');
      expect(tasksElements.length).toBe(2);
    });

    it('should complete a taks on clicking on it', () => {
      const { getByPlaceholderText, getByRole, getByTestId } = render(
        <MockTodo />
      );

      const inputElement = getByPlaceholderText('Add a new task here...');
      const buttonElement = getByRole('button');

      fireEvent.change(inputElement, { target: { value: 'Buy food' } });
      fireEvent.click(buttonElement);

      const taskElement = getByTestId('task-container');

      expect(taskElement).not.toHaveClass('todo-item-active');
      fireEvent.click(taskElement);

      expect(taskElement).toHaveClass('todo-item-active');
    });
  });
});
