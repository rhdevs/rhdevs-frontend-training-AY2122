import React from 'react'
import LastRow from './LastRow'
import ToDoCard from './ToDoCard'
import { ToDo } from '../../store/toDoRedux/types'
import { Wrapper } from './styles/ToDoList.styled'

type Props = {
  toDos: ToDo[]
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
  isDarkMode: boolean
}

const ToDoList = (props: Props) => {
  return (
    <Wrapper>
      {props.toDos
        .filter((toDo: ToDo) => {
          return toDo.isVisible
        })
        .map((toDo: ToDo) => (
          <ToDoCard
            isDarkMode={props.isDarkMode}
            key={toDo.key}
            toDo={toDo}
            setToDos={props.setToDos}
            toDos={props.toDos}
          />
        ))}
      <LastRow isDarkMode={props.isDarkMode} setToDos={props.setToDos} toDos={props.toDos} />
    </Wrapper>
  )
}

export default ToDoList
