import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../screens/home';

test('renders home and all routes', () => {
  render(<Home />);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
});
