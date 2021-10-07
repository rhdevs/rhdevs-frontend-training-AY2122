import React from 'react'
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import {
  Bookings_container,
  IndividualBookings,
  TopNav,
  Header,
  EventText,
  TimeText,
  LocationText,
  BotNav,
  StyledButton,
  ButtonContainer,
  ToggleButton,
  Calendar_container,
  Day_container,
  Days,
} from './styles/Screen2.styled'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconUnselected from '../../../assets/Group1/facilitiesIconUnselected.svg'
import calenderIconSelected from '../../../assets/Group1/calenderIconSelected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'
import { useState } from 'react'

const Screen2 = () => {
  const [isDailyMode, setDailyMode] = useState(true)

  return (
    <>
      {renderTopNav(isDailyMode)}

      <Bookings_container>
        {/*TODO: Create new component*/}
        {/*{console.log(mockValues)}*/}
        <ButtonContainer>
          <ToggleButton onClick={() => setDailyMode(!isDailyMode)}>
            {isDailyMode ? 'Show Weekly' : 'Show Daily'}
          </ToggleButton>
        </ButtonContainer>
        {isDailyMode ? renderDailySchedule() : renderWeeklySchedule()}
      </Bookings_container>
      {renderBotNav()}
    </>
  )
}

const renderTopNav = (isDailyMode: boolean) => (
  <TopNav>
    <LeftOutlined />
    <Header>{isDailyMode ? 'Oct 8, Friday (Semester 1, Week 7)' : 'Semester 1, Week 7'}</Header>
    <UnorderedListOutlined />
  </TopNav>
)
const renderBotNav = () => (
  <BotNav>
    <StyledButton src={homeIconUnselected} />
    <StyledButton src={facilitiesIconUnselected} />
    {/*TODO: Get designers to get a green selected svg for this icon*/}
    <StyledButton src={calenderIconSelected} />
    <StyledButton src={profileIconUnselected} />
  </BotNav>
)

const renderDailySchedule = () =>
  mockValues.map((e) => (
    <IndividualBookings background={e.type} key={e.id}>
      <EventText>{e.event}</EventText>
      <TimeText>{e.time}</TimeText>
      <LocationText>{e.location}</LocationText>
    </IndividualBookings>
  ))

// TODO: Finish this part
const renderWeeklySchedule = () =>
  days.map((d) => (
    <>
      <Days>{d.day}</Days>
      <Calendar_container key={d.id}>
        <Day_container>test</Day_container>
        <Day_container></Day_container>
        <Day_container></Day_container>
        <Day_container></Day_container>
        <Day_container></Day_container>
      </Calendar_container>
    </>
  ))

const mockValues = [
  { id: 1, event: 'CS1101S Tutorial', location: 'COM1', type: 'academic', time: '8:00am - 10:00am' },
  { id: 2, event: 'RHMP Recording', location: 'Raffles Hall', type: 'hall', time: '10:00am - 12:00pm' },
  { id: 3, event: 'Meetup with friends', location: 'UTown', type: 'others', time: '12:00pm - 2:00pm' },
  { id: 4, event: 'Hall event', location: 'Raffles Hall', type: 'hall', time: '2:00pm - 5:00pm' },
  { id: 5, event: 'GET1020 Lecture', location: 'Online', type: 'academic', time: '5:00pm - 8:00pm' },
]

const days = [
  { id: 1, day: 'Mon' },
  { id: 2, day: 'Tue' },
  { id: 3, day: 'Wed' },
  { id: 4, day: 'Thu' },
  { id: 5, day: 'Fri' },
]

export default Screen2
