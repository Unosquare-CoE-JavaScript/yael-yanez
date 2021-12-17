import { render, waitFor } from '../../../test-utils/testing-library-utils';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import OrderEntry from '../OrderEntry';
import userEvent from '@testing-library/user-event';

test('handles error for scoops and toopings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const { findAllByRole } = render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});

test('disables order button if there are no soops ordered', async () => {
  const { getByRole, findByRole } = render(
    <OrderEntry setOrderPhase={jest.fn()} />
  );

  const orderButton = getByRole('button', { name: /order sundae/i });
  expect(orderButton).toBeDisabled();

  const vanillaInput = await findByRole('spinbutton', { name: 'Vanilla' });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(orderButton).toBeEnabled();

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '0');
  expect(orderButton).toBeDisabled();
});
