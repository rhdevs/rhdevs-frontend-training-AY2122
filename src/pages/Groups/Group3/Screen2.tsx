import React from 'react'

import {
  MainContainer,
  HeaderRow,
  HeaderInformation,
  IconStyling,
  Header,
  StyledSegment,
  SubHeader,
} from './styles/Screen2.styled'
import BottomNavBar from '../../../components/BottomNavBar'
import FilledButton from '../../../components/FilledButton'
import WashingMachineCard from '../../../components/WashingMachineCard'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons'

const Screen2 = () => {
  return (
    <MainContainer>
      <HeaderRow>
        <HeaderInformation>
          <LeftOutlined style={IconStyling} />
          <Header>Reservation</Header>
        </HeaderInformation>
        <SearchOutlined style={IconStyling} />
      </HeaderRow>

      <StyledSegment>
        <SubHeader>Washing Machine Settings</SubHeader>
        <WashingMachineCard filledButton={false} buttonText="None" name="Model"></WashingMachineCard>
        <WashingMachineCard filledButton={false} buttonText="None" name="Water Level"></WashingMachineCard>
        <WashingMachineCard filledButton={false} buttonText="None" name="Program"></WashingMachineCard>
        <WashingMachineCard filledButton={false} buttonText="None" name="Model"></WashingMachineCard>
      </StyledSegment>

      <StyledSegment>
        <FilledButton filled={false} buttonText="Reserve!" type="RESERVE"></FilledButton>
      </StyledSegment>

      <BottomNavBar />
    </MainContainer>
  )
}

export default Screen2
