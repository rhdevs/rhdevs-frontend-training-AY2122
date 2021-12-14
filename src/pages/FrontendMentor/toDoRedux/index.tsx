import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/types'
import { LogoBox, MainBox, Rows, TopRow, MainContainer, SocialIcons } from './Todo.styled'
import ToDoList from '../../../components/ToDo/ToDoList'
import ToDoForm from '../../../components/ToDo/ToDoForm'
import { uuid } from 'uuidv4'
import { ToDo } from '../../../store/toDoRedux/types'
import { addToDo } from '../../../store/toDoRedux/actions'

const TodoApp = () => {
  const initialList = useSelector((state: RootState) => state.toDoReducer.toDos)
  const dispatch = useDispatch()
  const [toDos, setToDos] = useState<ToDo[]>(initialList)
  const [isDarkMode, setDarkMode] = useState(true)

  function addTodo(todo: string) {
    // adds new todo to beginning of todos array
    const newToDo = { key: uuid(), task: todo, isCompleted: false, isVisible: true }
    dispatch(addToDo(newToDo))
    //setToDos({toDos}
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
