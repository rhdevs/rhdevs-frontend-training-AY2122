import React from 'react'
import { Button } from 'antd'
import { useHistory, BrowserRouter } from 'react-router-dom'
import { PATHS } from '../routes/PATHS'
import { Routes } from '../routes/Routes'
import BackgroundPicture from '../assets/home/background-home-desktop.jpg'
import {
  HomeBackground,
  HomeBackgroundContainer,
  NavBarContainer,
  NavBarRow,
  NavBarTitle,
} from '../components/styles/NavBar.styled'

const HomePage = () => {
  const history = useHistory()
  return (
    <>
      <div>
        <HomeBackgroundContainer>
          <HomeBackground src={BackgroundPicture} />
          <NavBarContainer>
            <NavBarRow>
              <NavBarTitle>Home Page</NavBarTitle>
              <Button onClick={() => history.push(PATHS.CREW)}>Crew</Button>
              <Button onClick={() => history.push(PATHS.DESTINATION)}>Destination</Button>
              <Button onClick={() => history.push(PATHS.TECHNOLOGY)}>Technology</Button>
            </NavBarRow>
          </NavBarContainer>
        </HomeBackgroundContainer>
      </div>
    </>
  )
}

export default HomePage
