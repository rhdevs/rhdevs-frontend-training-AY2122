import React from 'react'
import { Rectangle, CircleButton, TextBox } from './styles/ToDoCard.styled'
import { Todo } from '../../pages/FrontendMentor/Todo'

type Props = {
  key: string
  todo: Todo
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>
  todos: Todo[]
  isDarkMode: boolean
}

const ToDoCard = (props: Props) => {
  const handleClick = () => {
    const updatedCompleted = props.todos.map((item) => {
      if (item.key === props.todo.key) return { ...item, isCompleted: !item.isCompleted }
      else return { ...item }
    })
    props.setToDos(updatedCompleted)
  }
  return (
    <Rectangle isDarkMode={props.isDarkMode}>
      <CircleButton isSelected={props.todo.isCompleted} isDarkMode={props.isDarkMode} onClick={handleClick} />
      <TextBox> {props.todo.isCompleted === true ? <del>{props.todo.task}</del> : props.todo.task}</TextBox>
    </Rectangle>
  )
}

export default ToDoCard
