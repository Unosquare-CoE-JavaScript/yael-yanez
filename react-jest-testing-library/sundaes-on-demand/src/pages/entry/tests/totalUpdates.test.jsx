import { render } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import Options from '../Options';
import OrderEntry from '../OrderEntry';

test('update scoop subtotal when scoops change', async () => {
  const { getByText, findByRole } = render(<Options optionType="scoops" />);

  const scoopsSubtotal = getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const vanillaInput = await findByRole('spinbutton', { name: 'Vanilla' });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  const chocolateInput = await findByRole('spinbutton', { name: 'Chocolate' });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('update toppings subtotal when toppings change', async () => {
  const { getByText, findByRole } = render(<Options optionType="toppings" />, {
    wrapper: OrderDetailsProvider,
  });

  const toppingsTotal = getByText('Toppings total: $', { exact: false });
  expect(toppingsTotal).toHaveTextContent('0.00');

  const cherriesCheckbox = await findByRole('checkbox', { name: 'Cherries' });
  userEvent.click(cherriesCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');

  const hotFudgeCheckbox = await findByRole('checkbox', { name: 'Hot fudge' });
  userEvent.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent('3.00');

  userEvent.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');
});

describe('grand total', () => {
  test('gran total updates properly if scoop is added first', async () => {
    const { getByRole, findByRole } = render(<OrderEntry />);
    const grandTotal = getByRole('heading', { name: /grand total: \$/i });

    expect(grandTotal).toHaveTextContent('0.00');

    const vanillaInput = await findByRole('spinbutton', { name: 'Vanilla' });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '2');

    expect(grandTotal).toHaveTextContent('4.00');
  });

  test('gran total updates properly if topping is added first', async () => {
    const { getByRole, findByRole } = render(<OrderEntry />);

    const cherriesCheckbox = await findByRole('checkbox', {
      name: 'Cherries',
    });
    userEvent.click(cherriesCheckbox);
    const grandTotal = getByRole('heading', { name: /grand total: \$/i });
    expect(grandTotal).toHaveTextContent('1.50');

    const vanillaInput = await findByRole('spinbutton', { name: 'Vanilla' });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('gran total updates properly if item is removed', async () => {
    const { findByRole, getByRole } = render(<OrderEntry />);

    const cherriesCheckbox = await findByRole('checkbox', {
      name: 'Cherries',
    });
    userEvent.click(cherriesCheckbox);

    const vanillaInput = await findByRole('spinbutton', {
      name: 'Vanilla',
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '2');

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');

    const grandTotal = getByRole('heading', { name: /grand total: \$/i });
    expect(grandTotal).toHaveTextContent('3.50');

    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('2.00');
  });
});
