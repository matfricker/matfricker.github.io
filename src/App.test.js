import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button with Reverse Spin text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reverse Spin/i);
  expect(linkElement).toBeInTheDocument();
});
