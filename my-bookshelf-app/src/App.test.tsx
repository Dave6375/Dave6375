import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Object Identifier heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Object Identifier/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders upload instructions', () => {
  render(<App />);
  const uploadText = screen.getByText(/Drop an image here or click to upload/i);
  expect(uploadText).toBeInTheDocument();
});
