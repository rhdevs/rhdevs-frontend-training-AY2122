import React from 'react'
import ToDoCard from './ToDoCard'

type todo = {
  key: string
  task: string
  completed: boolean
}

type Props = {
  todos: todo[]
  setTodos: any
}

const ToDoList = (props: Props) => {
  return (
    <>
      {props.todos.map((todo: todo) => (
        <ToDoCard key={todo.key} todo={todo} setToDos={props.setTodos} todos={props.todos} />
      ))}
    </>
  )
}

export default ToDoList
