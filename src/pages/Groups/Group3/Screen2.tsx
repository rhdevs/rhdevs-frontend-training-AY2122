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
} from './styles/Screen2.styled'
import BottomNavBar from '../../../components/BottomNavBar'
import backButton from '../../../assets/Group3/back.svg'
import search from '../../../assets/Group3/loupe.svg'
import ReserveButton from '../../../components/ReserveButton'
import WashingMachineCard from '../../../components/WashingMachineCard'

const Screen2 = () => {
  return (
    <MainContainer>
      <HeaderRow>
        <HeaderInformation>
          <HeaderBackButton src={backButton}></HeaderBackButton>
          <Header>Reservation</Header>
        </HeaderInformation>
        <HeaderSearchButton src={search}></HeaderSearchButton>
      </HeaderRow>

      <StyledSegment>
        <SubHeader>Washing Machine Settings</SubHeader>
        <WashingMachineCard filledButton={false} buttonText="None" name="Model"></WashingMachineCard>
        <WashingMachineCard filledButton={false} buttonText="None" name="Water Level"></WashingMachineCard>
        <WashingMachineCard filledButton={false} buttonText="None" name="Program"></WashingMachineCard>
        <WashingMachineCard filledButton={false} buttonText="None" name="Model"></WashingMachineCard>
      </StyledSegment>

      <StyledSegment>
        <ReserveButton filled={false} buttonText="Reserve!"></ReserveButton>
      </StyledSegment>

      <BottomNavBar />
    </MainContainer>
  )
}

export default Screen2
