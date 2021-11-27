import React, { useState } from 'react'
import Todo from '../../pages/FrontendMentor/Todo'
import { ItemsLeft, MiddleTBox, Rectangle, TextBox, Clear } from './styles/LastRow.styled'
type todo = {
  key: string
  task: string
  completed: boolean
  visible: boolean
}

type Props = {
  todos: todo[]
  setTodos: any
}

const LastRow = (props: Props) => {
  const clearCompleted = () => {
    const filtered = props.todos.filter((task) => {
      return !task.completed
    })
    props.setTodos(filtered)
  }

  const showAll = () => {
    const mapped = props.todos.map((task: todo) => {
      return task.completed === false ? { ...task, visible: true } : { ...task, visible: true }
    })
    props.setTodos(mapped)
  }

  const showActive = () => {
    const mapped = props.todos.map((task: todo) => {
      return task.completed === false ? { ...task, visible: true } : { ...task, visible: false }
    })
    props.setTodos(mapped)
  }

  const showCompleted = () => {
    const mapped = props.todos.map((task) => {
      return task.completed === true ? { ...task, visible: true } : { ...task, visible: false }
    })
    props.setTodos(mapped)
  }

  return (
    <Rectangle>
      <ItemsLeft>{props.todos.filter((todo) => !todo.completed).length} items left</ItemsLeft>
      <MiddleTBox>
        <TextBox onClick={showAll}>All</TextBox>
        <TextBox onClick={showActive}>Active</TextBox>
        <TextBox onClick={showCompleted}> Completed</TextBox>
      </MiddleTBox>
      <Clear onClick={clearCompleted}>Clear completed</Clear>
    </Rectangle>
  )
}

export default LastRow
