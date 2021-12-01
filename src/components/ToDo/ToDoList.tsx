import React from 'react'
import LastRow from './LastRow'
import ToDoCard from './ToDoCard'
import { Todo } from '../../pages/FrontendMentor/Todo'

type Props = {
  todos: Todo[]
  setTodos: any
  isDarkMode: boolean
}

const ToDoList = (props: Props) => {
  return (
    <>
      {props.todos
        .filter((todo: Todo) => {
          return todo.visible
        })
        .map((todo: Todo) => (
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
