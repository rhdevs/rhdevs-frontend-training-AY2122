import React from 'react'
import { LogoBox, MainBox, Rows } from './Todo.styled'
import { TopRow } from './Todo.styled'
import { MainContainer } from './Todo.styled'
import { useState } from 'react'
import ToDoCard from '../../../components/ToDo/ToDoCard'
import ToDoList from '../../../components/ToDo/ToDoList'
import ToDoForm from '../../../components/ToDo/ToDoForm'

type todo = {
  key: string
  task: string
  completed: boolean
}

const initialList: todo[] = [
  {
    key: '1',
    task: 'Buy groceries',
    completed: false,
  },
  {
    key: '2',
    task: 'Study Finals',
    completed: false,
  },
]

const Todo = () => {
  const [todos, setTodos] = useState(initialList)
  function addTodo(todo: string) {
    // adds new todo to beginning of todos array
    const newTodo = { key: String(todos.length + 1), task: todo, completed: false }
    setTodos([newTodo, ...todos])
  }
  return (
    <MainContainer>
      <MainBox>
        <TopRow>
          <LogoBox>TODO</LogoBox>
          <LogoBox>O</LogoBox>
        </TopRow>
        <Rows>
          <ToDoForm addTodo={addTodo} />
        </Rows>
        <Rows>
          <ToDoList todos={todos} setTodos={setTodos} />
        </Rows>
      </MainBox>
    </MainContainer>
  )
}

export default Todo
