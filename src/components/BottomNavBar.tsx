import React from 'react'
import styled from 'styled-components'

import { StyledBottomNavBar, NavBarIcon, Icon, Avatar } from './styles/BottomNavBar.styled'
import food from '../assets/Group3/food-tray.svg'
import calendar from '../assets/Group3/calendar.svg'
import home from '../assets/Group3/home.svg'
import avatar from '../assets/Group3/avatar.jpg'

const BottomNavBar = () => {
  return (
    <StyledBottomNavBar>
      <NavBarIcon>
        <Icon src={food}></Icon>
      </NavBarIcon>
      <NavBarIcon>
        <Icon src={calendar}></Icon>
      </NavBarIcon>
      <NavBarIcon>
        <Icon src={home}></Icon>
      </NavBarIcon>
      <NavBarIcon>
        <Avatar src={avatar}></Avatar>
      </NavBarIcon>
    </StyledBottomNavBar>
  )
}

export default BottomNavBar
