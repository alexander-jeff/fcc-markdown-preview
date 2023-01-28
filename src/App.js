import React from 'react'
import './App.css'
import TextInputBox from './components/TextInputBox'
import PreviewArea from './components/PreviewArea'
import PrimaryHeading from './components/PrimaryHeading'
import { WELCOME_TEXT } from './util/welcome'

const App = () => {
  const [text, setText] = React.useState(WELCOME_TEXT)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='App'>
      <PrimaryHeading text={'fcc-markdown-preview'}></PrimaryHeading>
      <TextInputBox
        onChange={handleChange}
        value={text}
      ></TextInputBox>
      <PreviewArea text={text}></PreviewArea>
    </div>
  )
}

export default App
