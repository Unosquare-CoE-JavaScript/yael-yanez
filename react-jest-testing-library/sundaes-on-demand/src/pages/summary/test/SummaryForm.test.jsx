import { render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('by default, button is disabled if chechbox is unchecked', () => {
  const { getByRole } = render(<SummaryForm />);

  const checkbox = getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });
  const button = getByRole('button', { name: 'Confirm order' });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('enable and disable the button when checking and uncheking the checkbox', () => {
  const { getByRole } = render(<SummaryForm />);

  const checkbox = getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });
  const button = getByRole('button', { name: 'Confirm order' });

  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('popover responds to hover', async () => {
  const { queryByText, getByText } = render(<SummaryForm />);

  const termsAndCoditions = getByText(/terms and conditions/i);
  const nullPopover = queryByText(/no ice cream will actually be delivered/i);

  expect(nullPopover).not.toBeInTheDocument();

  userEvent.hover(termsAndCoditions);

  const popover = getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termsAndCoditions);

  await waitForElementToBeRemoved(() =>
    queryByText(/no ice cream will actually be delivered/i)
  );
});
