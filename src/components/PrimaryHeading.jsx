import React from 'react'

const PrimaryHeading = (props) => {
  const { text } = props
  return <h1 data-testid='headTitle'>{text}</h1>
}

export default PrimaryHeading
