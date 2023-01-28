import React from 'react'
import './PreviewArea.css'
import { marked } from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartypants: false,
  xhtml: false,
})

const PreviewArea = (props) => {
  const { text } = props
  const markedText = marked.parse(text)
  return (
    <div
      id='preview'
      data-testid='preview'
      dangerouslySetInnerHTML={{ __html: markedText }}
    ></div>
  )
}
export default PreviewArea
