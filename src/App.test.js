import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elt = screen.getByText(/fcc-markdown-preview/i);
  expect(elt).toBeInTheDocument();
});
