import React from 'react'
import { ItemsLeft, MiddleTBox, Rectangle, TextBox, Clear } from './styles/LastRow.styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import { showActive, showCompleted, showAll, clearCompleted } from '../../store/toDoRedux/actions'
const LastRow = () => {
  const state = useSelector((state: RootState) => state.toDoReducer)
  const dispatch = useDispatch()

  return (
    <Rectangle isDarkMode={state.isDarkMode}>
      <ItemsLeft>{state.toDos.filter((toDo) => !toDo.isCompleted).length} items left</ItemsLeft>
      <MiddleTBox>
        <TextBox onClick={() => dispatch(showAll())}>All</TextBox>
        <TextBox onClick={() => dispatch(showActive())}>Active</TextBox>
        <TextBox onClick={() => dispatch(showCompleted())}> Completed</TextBox>
      </MiddleTBox>
      <Clear onClick={() => dispatch(clearCompleted())}>Clear completed</Clear>
    </Rectangle>
  )
}

export default LastRow
