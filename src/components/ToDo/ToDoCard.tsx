import React, { useState } from 'react'
import { Rectangle, Circle, TextBox } from './styles/ToDoCard.styled'
import { Todo } from '../../pages/FrontendMentor/Todo'

type Props = {
  key: string
  todo: Todo
  setToDos: any
  todos: Todo[]
  isDarkMode: boolean
}

const ToDoCard = (props: Props) => {
  const handleClick = () => {
    const mapped = props.todos.map((item) => {
      return item.key == props.todo.key ? { ...item, completed: !item.completed } : { ...item }
    })
    props.setToDos(mapped)
  }
  return (
    <Rectangle isDarkMode={props.isDarkMode}>
      <Circle isSelected={props.todo.completed} isDarkMode={props.isDarkMode} onClick={handleClick} />
      <TextBox> {props.todo.completed === true ? <del>{props.todo.task}</del> : props.todo.task}</TextBox>
    </Rectangle>
  )
}

export default ToDoCard
