import React, { useState } from 'react'
import { Rectangle, CircleButton, TextBox } from './styles/ToDoCardForm.styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import { uuid } from 'uuidv4'
import { addToDo } from '../../store/toDoRedux/actions'
import { ToDo } from '../../store/toDoRedux/types'

const ToDoForm = () => {
  const dispatch = useDispatch()
  function addTodo(todo: string) {
    const newToDo: ToDo = { key: uuid(), task: todo, isCompleted: false, isVisible: true }
    dispatch(addToDo(newToDo))
  }
  const [userInput, setUserInput] = useState('')
  const state = useSelector((state: RootState) => state.toDoReducer)
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
    <Rectangle isDarkMode={state.isDarkMode}>
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
