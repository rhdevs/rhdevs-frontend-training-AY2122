import React from 'react'

import {
  MainContainer,
  HeaderRow,
  HeaderInformation,
  HeaderBackButton,
  HeaderSearchButton,
  Header,
  StyledSegment,
  SubHeader,
} from './styles/Screen1.styled'
import BottomNavBar from '../../../components/BottomNavBar'
import backButton from '../../../assets/Group3/back.svg'
import search from '../../../assets/Group3/loupe.svg'
import FriendCard from '../../../components/FriendCard'

const Screen1 = () => {
  return (
    <MainContainer>
      <HeaderRow>
        <HeaderInformation>
          <HeaderBackButton src={backButton}></HeaderBackButton>
          <Header>Friends</Header>
        </HeaderInformation>
        <HeaderSearchButton src={search}></HeaderSearchButton>
      </HeaderRow>
      <StyledSegment>
        <SubHeader>Pending Friend Request(s)</SubHeader>
        <FriendCard filledButton={false} buttonText="Accept" name="Richard Nick Young"></FriendCard>
        <FriendCard filledButton={false} buttonText="Accept" name="Nimama"></FriendCard>
      </StyledSegment>
      <StyledSegment>
        <SubHeader>My Friends</SubHeader>
        <FriendCard filledButton buttonText="Remove" name="Womama"></FriendCard>
        <FriendCard filledButton buttonText="Remove" name="Dina"></FriendCard>
        <FriendCard filledButton buttonText="Remove" name="MaoMao"></FriendCard>
        <FriendCard filledButton buttonText="Remove" name="Hui Hui"></FriendCard>
      </StyledSegment>
      <BottomNavBar></BottomNavBar>
    </MainContainer>
  )
}

export default Screen1
