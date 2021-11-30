import React from 'react'
import LastRow from './LastRow'
import ToDoCard from './ToDoCard'

type todo = {
  key: string
  task: string
  completed: boolean
  visible: boolean
}

type Props = {
  todos: todo[]
  setTodos: any
  isDarkMode: boolean
}

const ToDoList = (props: Props) => {
  return (
    <>
      {props.todos
        .filter((todo: todo) => {
          return todo.visible
        })
        .map((todo: todo) => (
          <ToDoCard
            isDarkMode={props.isDarkMode}
            key={todo.key}
            todo={todo}
            setToDos={props.setTodos}
            todos={props.todos}
          />
        ))}
      <LastRow isDarkMode={props.isDarkMode} setTodos={props.setTodos} todos={props.todos} />
    </>
  )
}

export default ToDoList
