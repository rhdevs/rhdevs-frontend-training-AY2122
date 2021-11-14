import React from 'react'
import { LogoBox, MainBox, Rows } from './Todo.styled'
import { TopRow } from './Todo.styled'
import { MainContainer } from './Todo.styled'
import ToDoCard from '../../../components/ToDo/ToDoCard'
import ToDoList from '../../../components/ToDo/ToDoList'
const Todo = () => {
  return (
    <MainContainer>
      <MainBox>
        <TopRow>
          <LogoBox>TODO</LogoBox>
          <LogoBox>O</LogoBox>
        </TopRow>
        <Rows>
          <ToDoCard></ToDoCard>
        </Rows>
        <Rows>
          <ToDoList></ToDoList>
        </Rows>
      </MainBox>
    </MainContainer>
  )
}

export default Todo
