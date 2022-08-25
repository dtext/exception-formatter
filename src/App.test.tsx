import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders caption', () => {
  render(<App />);
  const caption = screen.getByText(/prettyPrint/i);
  expect(caption).toBeInTheDocument();
});
