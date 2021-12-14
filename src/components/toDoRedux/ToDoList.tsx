import React from 'react'
import LastRow from './LastRow'
import ToDoCard from './ToDoCard'
import { ToDo } from '../../store/toDoRedux/types'
import { Wrapper } from './styles/ToDoList.styled'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'

const ToDoList = () => {
  const state = useSelector((state: RootState) => state.toDoReducer)
  return (
    <Wrapper>
      {state.toDos
        .filter((toDo: ToDo) => {
          return toDo.isVisible
        })
        .map((toDo: ToDo) => (
          <ToDoCard key={toDo.key} toDo={toDo} />
        ))}
      <LastRow />
    </Wrapper>
  )
}

export default ToDoList
