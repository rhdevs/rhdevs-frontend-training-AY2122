import React, { useState } from 'react'
import Todo from '../../pages/FrontendMentor/Todo'
import { ItemsLeft, MiddleTBox, Rectangle, TextBox, Clear } from './styles/LastRow.styled'
type todo = {
  key: string
  task: string
  completed: boolean
}

type Props = {
  todos: todo[]
  setTodos: any
}

const LastRow = (props: Props) => {
  const [allToDo, setAllToDo] = useState(props.todos)

  const clearCompleted = () => {
    const filtered = props.todos.filter((task) => {
      return !task.completed
    })
    props.setTodos(filtered)
    setAllToDo(filtered)
  }

  const showAll = () => {
    props.setTodos(allToDo)
  }

  const showActive = () => {
    setAllToDo(props.todos)
    const filtered = props.todos.filter((task) => {
      return !task.completed
    })
    props.setTodos(filtered)
  }

  const showCompleted = () => {
    setAllToDo(props.todos)
    const filtered = props.todos.filter((task) => {
      return task.completed
    })
    props.setTodos(filtered)
  }

  return (
    <Rectangle>
      <ItemsLeft>{props.todos.length} items left</ItemsLeft>
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
