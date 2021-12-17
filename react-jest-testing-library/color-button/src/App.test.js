import { fireEvent, render } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  const { getByRole } = render(<App />);
  const button = getByRole('button', { name: 'Change to Medium Violet Red' });

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  fireEvent.click(button);

  expect(button).toHaveTextContent('Change to Midnight Blue');
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('initial conditions', () => {
  const { getByRole } = render(<App />);

  const button = getByRole('button', { name: 'Change to Medium Violet Red' });
  expect(button).toBeEnabled();

  const checkbox = getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  const { getByRole } = render(<App />);

  const checkbox = getByRole('checkbox', { name: 'Disable button' });
  const button = getByRole('button', { name: 'Change to Medium Violet Red' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button).toBeEnabled();

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
