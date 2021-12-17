import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test.only('order phase for happy path', async () => {
  const {
    findByRole,
    getByRole,
    getByText,
    getAllByRole,
    findByText,
    queryByText,
  } = render(<App />);

  const vanillaInput = await findByRole('spinbutton', { name: 'Vanilla' });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

  const chocolateInput = getByRole('spinbutton', { name: 'Chocolate' });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');

  const cherriesCheckbox = await findByRole('checkbox', { name: 'Cherries' });
  userEvent.click(cherriesCheckbox);

  const orderSummaryButton = getByRole('button', { name: /order sundae/i });
  userEvent.click(orderSummaryButton);

  const summaryHeading = getByRole('heading', { name: 'Order Summary' });
  expect(summaryHeading).toBeInTheDocument();

  const scoopsHeading = getByRole('heading', { name: 'Scoops: $6.00' });
  expect(scoopsHeading).toBeInTheDocument();

  const toppingsHeading = getByRole('heading', { name: 'Toppings: $1.50' });
  expect(toppingsHeading).toBeInTheDocument();

  expect(getByText('1 Vanilla')).toBeInTheDocument();
  expect(getByText('2 Chocolate')).toBeInTheDocument();
  expect(getByText('Cherries')).toBeInTheDocument();

  const optionItems = getAllByRole('listitem');
  const optionItemsText = optionItems.map((item) => item.textContent);
  expect(optionItemsText).toEqual(['1 Vanilla', '2 Chocolate', 'Cherries']);

  const tcCheckbox = getByRole('checkbox', { name: /terms and conditions/i });
  userEvent.click(tcCheckbox);

  const confirmOrderButton = getByRole('button', { name: /confirm order/i });
  userEvent.click(confirmOrderButton);

  const loading = getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const thankYouHeader = await findByRole('heading', { name: /thank you/i });
  expect(thankYouHeader).toBeInTheDocument();

  const notLoading = queryByText('loading');
  expect(notLoading).not.toBeInTheDocument();

  const newOrderButton = getByRole('button', { name: /new order/i });
  userEvent.click(newOrderButton);

  await waitFor(async () => {
    const scoopsTotal = await findByText('Scoops total: $0.00');
    expect(scoopsTotal).toBeInTheDocument();

    const toppingsTotal = await findByText('Toppings total: $0.00');
    expect(toppingsTotal).toBeInTheDocument();
  });

  await findByRole('spinbutton', { name: 'Vanilla' });
  await findByRole('checkbox', { name: 'Cherries' });
});

test('Toppings header is not on summary page if no toppings ordered', async () => {
  const { findByRole, getByRole } = render(<App />);

  const vanillaInput = await findByRole('spinbutton', { name: 'Vainilla' });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

  const chocolateInput = await findByRole('spinbutton', { name: 'Chocolate' });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');

  const orderSummaryButton = getByRole('button', { name: /order sundae/i });
  userEvent.click(orderSummaryButton);

  const scoopsHeading = getByRole('heading', { name: 'Scoops: $6.00' });
  expect(scoopsHeading).toBeInTheDocument();

  const toppingsHeader = getByRole('heading', { name: /toppings/i });
  expect(toppingsHeader).not.toBeInTheDocument();
});
