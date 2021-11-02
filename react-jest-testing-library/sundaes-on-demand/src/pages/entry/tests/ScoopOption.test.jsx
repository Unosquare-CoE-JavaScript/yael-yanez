import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SccopOption from '../ScoopOption';

test('indicate if scoop count is non-int or out of range', async () => {
  const { getByRole } = render(
    <SccopOption name="" imagePath="" updateItemCount={jest.fn()} />
  );

  const vanillaInput = getByRole('spinbutton');

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '-1');
  expect(vanillaInput).toHaveClass('is-invalid');

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '2.5');
  expect(vanillaInput).toHaveClass('is-invalid');

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '11');
  expect(vanillaInput).toHaveClass('is-invalid');

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '3');
  expect(vanillaInput).not.toHaveClass('is-invalid');
});
