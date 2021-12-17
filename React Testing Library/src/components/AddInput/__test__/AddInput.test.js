import { render, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

describe('<AddTodo /> Component', () => {
  describe('Functionality', () => {
    it('should change the value of the input on the onchange method', () => {
      const { getByRole } = render(
        <AddInput todos={[]} setTodos={mockedSetTodo} />
      );
      const inputElement = getByRole('textbox');

      expect(inputElement).toBeInTheDocument();

      fireEvent.change(inputElement, { target: { value: 'hello, world' } });

      expect(inputElement.value).toBe('hello, world');
    });

    it('should change the value of the input to nothing on addding the task', () => {
      const { getByRole } = render(
        <AddInput todos={[]} setTodos={mockedSetTodo} />
      );

      const inputElement = getByRole('textbox');
      const buttonElement = getByRole('button');

      expect(inputElement).toBeInTheDocument();
      expect(buttonElement).toBeInTheDocument();

      fireEvent.change(inputElement, { target: { value: 'hello, world' } });
      expect(inputElement.value).toBe('hello, world');

      fireEvent.click(buttonElement);
      expect(inputElement.value).toBe('');
    });
  });
});
