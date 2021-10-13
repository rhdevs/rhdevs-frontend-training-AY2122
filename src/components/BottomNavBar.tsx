import React from 'react'
import styled from 'styled-components'

import { StyledBottomNavBar, NavBarIcon, Icon, Avatar, IconStyling } from './styles/BottomNavBar.styled'
import food from '../assets/Group3/food-tray.svg'
import avatar from '../assets/Group3/avatar.jpg'
import { HomeOutlined, CalendarOutlined } from '@ant-design/icons'

const BottomNavBar = () => {
  return (
    <StyledBottomNavBar>
      <NavBarIcon>
        <Icon src={food}></Icon>
      </NavBarIcon>
      <NavBarIcon>
        <CalendarOutlined style={IconStyling} />
      </NavBarIcon>
      <NavBarIcon>
        <HomeOutlined style={IconStyling} />
      </NavBarIcon>
      <NavBarIcon>
        <Avatar src={avatar}></Avatar>
      </NavBarIcon>
    </StyledBottomNavBar>
  )
}

export default BottomNavBar
