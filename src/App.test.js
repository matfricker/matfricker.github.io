import { render, screen } from '@testing-library/react';
import App from './app';

test('renders button with Start text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button with Switch text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Switch/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button with Reset text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reset/i);
  expect(linkElement).toBeInTheDocument();
});


