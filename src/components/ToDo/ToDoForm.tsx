import React, { useState } from 'react'
import { Rectangle, CircleButton, TextBox } from './styles/ToDoCardForm.styled'

type Props = {
  addTodo: (text: string) => void
  isDarkMode: boolean
}

const ToDoForm = (props: Props) => {
  const [userInput, setUserInput] = useState('')
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value)
  }
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      props.addTodo(userInput)
      setUserInput('')
    }
  }

  return (
    <Rectangle isDarkMode={props.isDarkMode}>
      <CircleButton />
      <TextBox
        value={userInput}
        type="text"
        placeholder="What do you wanna do?"
        onChange={handleChange}
        onKeyDown={(e) => handleSubmit(e)}
      />
    </Rectangle>
  )
}

export default ToDoForm
