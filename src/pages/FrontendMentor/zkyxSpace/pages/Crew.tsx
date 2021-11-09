import React from 'react'
import { Button } from 'antd'
import { useHistory, BrowserRouter } from 'react-router-dom'
import { PATHS } from '../routes/PATHS'
import NavBar from '../components/NavBar'
import {
  Background,
  BackgroundContainer,
  NavBarContainer,
  NavBarRow,
  NavBarTitle,
} from '../components/styles/NavBar.styled'

import BackgroundPicture from '../assets/home/background-home-desktop.jpg'

const CrewPage = () => {
  const history = useHistory()
  return (
    <>
      <div>
        <BackgroundContainer>
          <Background src={BackgroundPicture} />
          <NavBar />
          <Button onClick={() => history.push(PATHS.HOME)}>HOME</Button>
        </BackgroundContainer>
      </div>
    </>
  )
}

export default CrewPage
