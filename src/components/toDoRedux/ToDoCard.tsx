import React from 'react'
import { Rectangle, CircleButton, TextBox } from './styles/ToDoCard.styled'
import { ToDo } from '../../store/toDoRedux/types'

type Props = {
  key: string
  toDo: ToDo
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
  toDos: ToDo[]
  isDarkMode: boolean
}

const ToDoCard = (props: Props) => {
  const handleClick = () => {
    const updatedCompleted = props.toDos.map((item) => {
      if (item.key === props.toDo.key) return { ...item, isCompleted: !item.isCompleted }
      else return { ...item }
    })
    props.setToDos(updatedCompleted)
  }
  return (
    <Rectangle isDarkMode={props.isDarkMode}>
      <CircleButton isSelected={props.toDo.isCompleted} isDarkMode={props.isDarkMode} onClick={handleClick} />
      <TextBox> {props.toDo.isCompleted === true ? <del>{props.toDo.task}</del> : props.toDo.task}</TextBox>
    </Rectangle>
  )
}

export default ToDoCard
