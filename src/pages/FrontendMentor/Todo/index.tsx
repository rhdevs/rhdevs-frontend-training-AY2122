import React, { useState } from 'react'
import { LogoBox, MainBox, Rows, TopRow, MainContainer, SocialIcons } from './Todo.styled'
import ToDoList from '../../../components/ToDo/ToDoList'
import ToDoForm from '../../../components/ToDo/ToDoForm'
import { uuid } from 'uuidv4'

export type ToDo = {
  key: string
  task: string
  isCompleted: boolean
  isVisible: boolean
}

const initialList: ToDo[] = [
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
  const [toDos, setToDos] = useState<ToDo[]>(initialList)
  const [isDarkMode, setDarkMode] = useState(true)
  function addTodo(todo: string) {
    // adds new todo to beginning of todos array
    const newToDo = { key: uuid(), task: todo, isCompleted: false, isVisible: true }
    setToDos([newToDo, ...toDos])
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
          <ToDoList isDarkMode={isDarkMode} toDos={toDos} setToDos={setToDos} />
        </Rows>
      </MainBox>
    </MainContainer>
  )
}

export default TodoApp
