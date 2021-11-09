import React from 'react'
import { Button } from 'antd'
import { useHistory, BrowserRouter } from 'react-router-dom'
import { PATHS } from '../routes/PATHS'
import NavBar from '../components/NavBar'
import { NavBarContainer, NavBarRow, NavBarTitle } from '../components/styles/NavBar.styled'

const CrewPage = () => {
  const history = useHistory()
  return (
    <>
      <div>Crew Page</div>
      <NavBarContainer>
        <NavBarRow>
          <NavBarTitle></NavBarTitle>
        </NavBarRow>
      </NavBarContainer>
      <Button onClick={() => history.push(PATHS.HOME)}>HOME</Button>
    </>
  )
}

export default CrewPage
