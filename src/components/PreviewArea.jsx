import React from 'react'
import './PreviewArea.css'

const PreviewArea = (props) => {
  const { text } = props
  return (
    <div
      id='preview'
      data-testid='preview'
    >
      {text}
    </div>
  )
}
export default PreviewArea
