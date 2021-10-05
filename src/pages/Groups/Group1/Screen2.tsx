import React from 'react'
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import {
  Bookings_container,
  IndividualBookings,
  TopNav,
  Header,
  EventText,
  LocationText,
  BotNav,
  StyledButton,
} from './styles/Screen2.styled'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconUnselected from '../../../assets/Group1/facilitiesIconUnselected.svg'
import calenderIconSelected from '../../../assets/Group1/calenderIconSelected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'

const Screen2 = () => {
  return (
    <>
      <TopNav>
        <LeftOutlined />
        <Header>Semester 1, Week 7</Header>
        <UnorderedListOutlined />
      </TopNav>

      <Bookings_container>
        {/*TODO: Create new component*/}
        <IndividualBookings background="green">
          <EventText>Event Name</EventText>
          <LocationText>Location</LocationText>
        </IndividualBookings>

        <IndividualBookings background="white">
          <EventText>Event Name</EventText>
          <LocationText>Location</LocationText>
        </IndividualBookings>

        <IndividualBookings background="green">
          <EventText>Event Name</EventText>
          <LocationText>Location</LocationText>
        </IndividualBookings>

        <IndividualBookings background="white">
          <EventText>Event Name</EventText>
          <LocationText>Location</LocationText>
        </IndividualBookings>

        <IndividualBookings background="green">
          <EventText>Event Name</EventText>
          <LocationText>Location</LocationText>
        </IndividualBookings>

        <IndividualBookings background="white">
          <EventText>Event Name</EventText>
          <LocationText>Location</LocationText>
        </IndividualBookings>
      </Bookings_container>
      <BotNav>
        <StyledButton src={homeIconUnselected} />
        <StyledButton src={facilitiesIconUnselected} />
        {/*TODO: Get designers to get a green selected svg for this icon*/}
        <StyledButton src={calenderIconSelected} />
        <StyledButton src={profileIconUnselected} />
      </BotNav>
    </>
  )
}

export default Screen2
