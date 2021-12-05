import React from 'react'
import { Todo } from '../../pages/FrontendMentor/Todo'
import { ItemsLeft, MiddleTBox, Rectangle, TextBox, Clear } from './styles/LastRow.styled'

type Props = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  isDarkMode: boolean
}

const LastRow = (props: Props) => {
  const clearCompleted = () => {
    const notCompleted = props.todos.filter((task) => {
      return !task.isCompleted
    })
    props.setTodos(notCompleted)
  }

  const showAll = () => {
    const all = props.todos.map((task: Todo) => {
      return { ...task, visible: true }
    })
    props.setTodos(all)
  }

  const showActive = () => {
    const active = props.todos.map((task: Todo) => {
      return { ...task, visible: task.isCompleted === false }
    })
    props.setTodos(active)
  }

  const showCompleted = () => {
    const mapped = props.todos.map((task) => {
      return { ...task, visible: task.isCompleted === true }
    })
    props.setTodos(mapped)
  }

  return (
    <Rectangle isDarkMode={props.isDarkMode}>
      <ItemsLeft>{props.todos.filter((todo) => !todo.isCompleted).length} items left</ItemsLeft>
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
