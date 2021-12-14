import React from 'react'
import { Rectangle, CircleButton, TextBox } from './styles/ToDoCard.styled'
import { ToDo } from '../../store/toDoRedux/types'
import { useSelector, useDispatch } from 'react-redux'
import { toggleToDo } from '../../store/toDoRedux/actions'
import { RootState } from '../../store/types'

type Props = {
  key: string
  toDo: ToDo
}

const ToDoCard = (props: Props) => {
  const state = useSelector((state: RootState) => state.toDoReducer)
  const dispatch = useDispatch()

  return (
    <Rectangle isDarkMode={state.isDarkMode}>
      <CircleButton
        isSelected={props.toDo.isCompleted}
        isDarkMode={state.isDarkMode}
        onClick={() => dispatch(toggleToDo(props.toDo.key))}
      />
      <TextBox> {props.toDo.isCompleted === true ? <del>{props.toDo.task}</del> : props.toDo.task}</TextBox>
    </Rectangle>
  )
}

export default ToDoCard
