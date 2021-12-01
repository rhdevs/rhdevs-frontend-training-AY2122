import React, { useState } from 'react'
import { Rectangle, Circle, TextBox } from './styles/ToDoCardForm.styled'
import { Todo } from '../../pages/FrontendMentor/Todo'

const ToDoForm = ({ addTodo, isDarkMode }: any) => {
  const [userInput, setUserInput] = useState('')
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value)
  }
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTodo(userInput)
      setUserInput('')
    }
  }

  return (
    <Rectangle isDarkMode={isDarkMode}>
      <Circle></Circle>
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
