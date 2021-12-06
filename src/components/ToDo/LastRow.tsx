import React from 'react'
import { ToDo } from '../../pages/FrontendMentor/Todo'
import { ItemsLeft, MiddleTBox, Rectangle, TextBox, Clear } from './styles/LastRow.styled'

type Props = {
  toDos: ToDo[]
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
  isDarkMode: boolean
}

const LastRow = (props: Props) => {
  const clearCompleted = () => {
    const notCompleted = props.toDos.filter((task) => {
      return !task.isCompleted
    })
    props.setToDos(notCompleted)
  }

  const showAll = () => {
    const all = props.toDos.map((task: ToDo) => {
      return { ...task, isVisible: true }
    })
    props.setToDos(all)
  }

  const showActive = () => {
    const active = props.toDos.map((task: ToDo) => {
      return { ...task, isVisible: task.isCompleted === false }
    })
    props.setToDos(active)
  }

  const showCompleted = () => {
    const mapped = props.toDos.map((task) => {
      return { ...task, isVisible: task.isCompleted }
    })
    props.setToDos(mapped)
  }

  return (
    <Rectangle isDarkMode={props.isDarkMode}>
      <ItemsLeft>{props.toDos.filter((toDo) => !toDo.isCompleted).length} items left</ItemsLeft>
      <MiddleTBox>
        <TextBox onClick={showAll}>All</TextBox>
        <TextBox onClick={showActive}>Active</TextBox>
        <TextBox onClick={showCompleted}> Completed</TextBox>
      </MiddleTBox>
      <Clear onClick={clearCompleted}>Clear completed</Clear>
    </Rectangle>
  )
}

export default LastRow
