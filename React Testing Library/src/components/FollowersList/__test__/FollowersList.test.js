import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe('<FollowersList /> Component Tests', () => {
  describe('Functionality', () => {
    beforeAll(() => console.log('RUNNING BEFORE ALL'));
    beforeEach(() => console.log('RUNNING BEFORE EACH'));
    afterEach(() => console.log('RUNNING AFTER EACH'));
    afterAll(() => console.log('RUNNING AFTER ALL'));

    it('should render the first item follower', async () => {
      const { findByTestId } = render(<MockFollowersList />);

      const followerElement = await findByTestId('follower-item-0');
      expect(followerElement).toBeInTheDocument();
    });

    it('should render the all five followers items', async () => {
      const { findAllByTestId } = render(<MockFollowersList />);

      const followerElement = await findAllByTestId(/follower-item/i);
      expect(followerElement).toHaveLength(5);
    });
  });
});
