import React, { useState } from 'react'
import { LogoBox, MainBox, Rows, TopRow, MainContainer, SocialIcons } from './Todo.styled'
import ToDoList from '../../../components/ToDo/ToDoList'
import ToDoForm from '../../../components/ToDo/ToDoForm'
import { uuid } from 'uuidv4'

export type Todo = {
  key: string
  task: string
  isCompleted: boolean
  isVisible: boolean
}

const initialList: Todo[] = [
  {
    key: '1',
    task: 'Buy groceries',
    isCompleted: false,
    isVisible: true,
  },
  {
    key: '2',
    task: 'Study finals',
    isCompleted: false,
    isVisible: true,
  },
]

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(initialList)
  const [isDarkMode, setDarkMode] = useState(true)
  function addTodo(todo: string) {
    // adds new todo to beginning of todos array
    const newTodo = { key: uuid(), task: todo, isCompleted: false, isVisible: true }
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
