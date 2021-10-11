import React from 'react'

import { MainContainer, HeaderRow, HeaderInformation, IconStyling, Header, SubHeader } from './styles/Screen1.styled'
import BottomNavBar from '../../../components/BottomNavBar'
import FriendCard from '../../../components/FriendCard'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons'

const Screen1 = () => {
  return (
    <MainContainer>
      <HeaderRow>
        <HeaderInformation>
          <LeftOutlined style={IconStyling} />
          <Header>Friends</Header>
        </HeaderInformation>
        <SearchOutlined style={IconStyling} />
      </HeaderRow>
      <div>
        <SubHeader>Pending Friend Request(s)</SubHeader>
        <FriendCard filledButton={false} buttonText="Accept" name="Richard Nick Young"></FriendCard>
        <FriendCard filledButton={false} buttonText="Accept" name="Nimama"></FriendCard>
      </div>
      <div>
        <SubHeader>My Friends</SubHeader>
        <FriendCard filledButton buttonText="Remove" name="Womama"></FriendCard>
        <FriendCard filledButton buttonText="Remove" name="Dina"></FriendCard>
        <FriendCard filledButton buttonText="Remove" name="MaoMao"></FriendCard>
        <FriendCard filledButton buttonText="Remove" name="Hui Hui"></FriendCard>
      </div>
      <BottomNavBar></BottomNavBar>
    </MainContainer>
  )
}

export default Screen1
