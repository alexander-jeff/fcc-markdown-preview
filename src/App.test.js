import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders text', () => {
  render(<App />);
  const elt = screen.getByText(/fcc-markdown-preview/i)
  expect(elt).toBeInTheDocument();
})

test('renders textarea', () => {
  render(<App />);
  const elt = screen.getByTestId('editor')
  expect(elt).toBeInTheDocument()
})

test('renders preview area', () => {
  render(<App />);
  const elt = screen.getByTestId('preview')
  expect(elt).toBeInTheDocument()
})

test('input in textarea is rendered in preview area', () => {
  render(<App />);
  const preview = screen.getByTestId('preview')
  userEvent.type(screen.getByRole('textbox'), 'I am typing in the textarea')
  expect(preview.textContent).toBe('I am typing in the textarea')
})