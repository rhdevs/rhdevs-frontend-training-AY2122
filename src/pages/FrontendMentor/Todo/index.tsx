import React from 'react'
import { LogoBox, MainBox, Rows, TopRow, MainContainer, SocialIcons } from './Todo.styled'
import { useState } from 'react'
import ToDoList from '../../../components/ToDo/ToDoList'
import ToDoForm from '../../../components/ToDo/ToDoForm'

type Todo = {
  key: string
  task: string
  completed: boolean
  visible: boolean
}
export type { Todo }

const initialList: Todo[] = [
  {
    key: '1',
    task: 'Buy groceries',
    completed: false,
    visible: true,
  },
  {
    key: '2',
    task: 'Study finals',
    completed: false,
    visible: true,
  },
]

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(initialList)
  const [isDarkMode, setDarkMode] = useState(true)
  function addTodo(todo: string) {
    // adds new todo to beginning of todos array
    const newTodo = { key: String(todos.length + 1), task: todo, completed: false, visible: true }
    setTodos([newTodo, ...todos])
  }
  function toggleDarkMode() {
    setDarkMode(!isDarkMode)
  }
  return (
    <MainContainer isDarkMode={isDarkMode}>
      <MainBox>
        <TopRow>
          <LogoBox>TODO</LogoBox>
          <LogoBox>
            <SocialIcons isDarkMode={isDarkMode} onClick={toggleDarkMode} />
          </LogoBox>
        </TopRow>
        <Rows>
          <ToDoForm addTodo={addTodo} isDarkMode={isDarkMode} />
        </Rows>
        <Rows>
          <ToDoList isDarkMode={isDarkMode} todos={todos} setTodos={setTodos} />
        </Rows>
      </MainBox>
    </MainContainer>
  )
}

export default TodoApp
