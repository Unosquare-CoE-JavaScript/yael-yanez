import { render } from '@testing-library/react';
import Header from '../Header';

describe('<Header /> Component Render Tests', () => {
  it('should render same text passed into title prop', () => {
    const { getByRole } = render(<Header title="My header" />);
    const headingElement = getByRole('heading', { name: 'My header' });

    expect(headingElement).toBeInTheDocument();
  });
});
