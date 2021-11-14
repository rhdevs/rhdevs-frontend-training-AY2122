import React, { useState } from 'react'
import { getAllJSDocTagsOfKind } from 'typescript'
import { Rectangle, Circle, TextBox } from './styles/ToDoCard.styled'

type todo = {
  key: string
  task: string
  completed: boolean
}

type Props = {
  key: string
  todo: todo
  setToDos: any
  todos: todo[]
}

const ToDoCard = (props: Props) => {
  const handleClick = () => {
    const mapped = props.todos.map((item) => {
      return item.key == props.todo.key ? { ...item, completed: !item.completed } : { ...item }
    })
    props.setToDos(mapped)
  }
  return (
    <Rectangle>
      <Circle onClick={handleClick} />
      <TextBox> {props.todo.completed === true ? <del>{props.todo.task}</del> : props.todo.task}</TextBox>
    </Rectangle>
  )
}

export default ToDoCard
