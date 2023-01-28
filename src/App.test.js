import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { WELCOME_TEXT } from './util/welcome'

test('renders text', () => {
  render(<App />)
  const elt = screen.getByTestId('headTitle')
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

  expect(preview.textContent).toContain('I am typing in the textarea')
})

test('welcome text is rendered on load', () => {
  render(<App />)
  const editor = screen.getByTestId('editor')
  expect(editor.textContent).toBe(WELCOME_TEXT)
})

test(
  'When my markdown previewer first loads, the default text in the #editor field' +
    'should contain valid markdown that represents at least one of each of the' +
    'following elements: a header (H1 size), a sub header (H2 size), a link, ' +
    'inline code, a code block, a list item, a blockquote, an image, and bolded text',
  () => {
    render(<App />)
    const editor = screen.getByTestId('editor')
    expect(editor.textContent).toContain('# This is a header')
    expect(editor.textContent).toContain('## This is a subheader')
    expect(editor.textContent).toContain(
      `[This is a link]('https://alexander-jeff.github.io/fcc-markdown-preview/')`
    )
    expect(editor.textContent).toContain('`This is inline code`')
    expect(editor.textContent).toContain('```\nThis is a code block\n```')
    expect(editor.textContent).toContain('- This is a list item')
    expect(editor.textContent).toContain('> This is a blockquote')
    expect(editor.textContent).toContain('**This is bolded text**')
    expect(editor.textContent).toContain('![This is an image](')
  }
)
