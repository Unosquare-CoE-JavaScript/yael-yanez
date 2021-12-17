import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import Options from '../Options';

test('display an image for each scoop option from the server', async () => {
  const { findAllByRole } = render(<Options optionType="scoops" />, {
    wrapper: OrderDetailsProvider,
  });
  const scoopImages = await findAllByRole('img', { nane: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display an image for each tooping option from the server', async () => {
  const { findAllByRole } = render(<Options optionType="toppings" />, {
    wrapper: OrderDetailsProvider,
  });
  const scoopImages = await findAllByRole('img', { name: /topping$/i });

  expect(scoopImages).toHaveLength(3);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
