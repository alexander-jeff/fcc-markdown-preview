import React from 'react'

const TextInputBox = ({ 
    onChange, 
    value 
}) => {
  return (
    <textarea
      id='editor'
      data-testid='editor'
      onChange={onChange}
      value={value}
    >
    </textarea>
  )
}

export default TextInputBox
