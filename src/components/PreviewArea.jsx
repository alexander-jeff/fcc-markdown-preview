import React from 'react'

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
