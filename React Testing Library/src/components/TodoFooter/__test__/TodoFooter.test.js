import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe('<TodoFooter /> Component Render Tests', () => {
  it('should render the correct amount of incomplete tasks', () => {
    const { getByText } = render(
      <MockTodoFooter numberOfIncompleteTasks={5} />
    );
    const paragraphElement = getByText(/5 tasks left/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render task when the number of incomplete tasks is one', () => {
    const { getByText } = render(
      <MockTodoFooter numberOfIncompleteTasks={1} />
    );
    const paragraphElement = getByText(/1 task left/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render visible to the user', () => {
    const { getByText } = render(
      <MockTodoFooter numberOfIncompleteTasks={1} />
    );
    const paragraphElement = getByText(/1 task left/i);

    expect(paragraphElement).toBeVisible();
  });
});
