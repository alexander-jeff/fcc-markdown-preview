import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders text', () => {
  render(<App />)
  const elt = screen.getByText(/fcc-markdown-preview/i)
  expect(elt).toBeInTheDocument()
})

test('renders textarea', () => {
  render(<App />)
  const elt = screen.getByTestId('editor')
  expect(elt).toBeInTheDocument()
})

test('renders preview area', () => {
  render(<App />)
  const elt = screen.getByTestId('preview')
  expect(elt).toBeInTheDocument()
})

test('input in textarea is rendered in preview area', () => {
  render(<App />)
  const preview = screen.getByTestId('preview')
  const textbox = screen.getByTestId('editor')

  userEvent.clear(textbox)
  userEvent.type(textbox, 'I am typing in the textarea')

  expect(preview.textContent).toBe('I am typing in the textarea')
})

test('welcome text is rendered on load', () => {
  render(<App />);
  const preview = screen.getByTestId('preview')
  expect(preview.textContent).toBe('# Welcome!\nEnter some markdown in the text area to see it rendered below.')
})