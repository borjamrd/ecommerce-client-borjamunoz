import { render, screen } from '@testing-library/react';
import App from './App';

test('...loading', () => {
  render(<App />);
  const linkElement = screen.getByText(/...loading/i);
  expect(linkElement).toBeInTheDocument();
});
