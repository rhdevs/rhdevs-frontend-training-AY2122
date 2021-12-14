import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/types'
import { LogoBox, MainBox, Rows, TopRow, MainContainer, SocialIcons } from './Todo.styled'
import ToDoList from '../../../components/toDoRedux/ToDoList'
import ToDoForm from '../../../components/toDoRedux/ToDoForm'
import { toggleDarkMode } from '../../../store/toDoRedux/actions'

const TodoApp = () => {
  const state = useSelector((state: RootState) => state.toDoReducer)
  const dispatch = useDispatch()
  //const [isDarkMode, setDarkMode] = useState(true)

  return (
    <MainContainer isDarkMode={state.isDarkMode}>
      <MainBox>
        <TopRow>
          <LogoBox>TODO</LogoBox>
          <LogoBox>
            <SocialIcons isDarkMode={state.isDarkMode} onClick={() => dispatch(toggleDarkMode())} />
          </LogoBox>
        </TopRow>
        <Rows>
          <ToDoForm />
        </Rows>
        <Rows>
          <ToDoList />
        </Rows>
      </MainBox>
    </MainContainer>
  )
}

export default TodoApp
