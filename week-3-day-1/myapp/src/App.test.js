import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to My First React App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to My First React App!/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders React 19 subtitle', () => {
  render(<App />);
  const textElement = screen.getByText(/This app is built using React 19/i);
  expect(textElement).toBeInTheDocument();
});
