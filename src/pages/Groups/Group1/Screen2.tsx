import React from 'react'
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import {
  WeekContainer,
  Time_container,
  Timing_container,
  Bookings_container,
  IndividualBookings,
  Screen2TopNav,
  Header,
  EventText,
  EventTextWeekly,
  TimeText,
  LocationText,
  LocationTextWeekly,
  Screen2BotNav,
  StyledButton,
  ButtonContainer,
  ToggleButton,
  Calendar_container,
  Day_container,
  Days,
  EventCard,
  DailyContainer,
  Subheader,
  SubNav,
  TextContainer,
} from './styles/Screen2.styled'
import { CodeFilled, CoffeeOutlined } from '@ant-design/icons'
import friendsIcon from '../../../assets/Group1/Friends.svg'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconUnselected from '../../../assets/Group1/facilitiesIconUnselected.svg'
import calenderIconSelected from '../../../assets/Group1/calenderIconSelected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'
import { useState } from 'react'

const Screen2 = () => {
  const [isDailyMode, setDailyMode] = useState(false)

  return (
    <>
      {TopNav()}

      <Bookings_container>
        <ButtonContainer>
          {isDailyMode ? renderSubheader() : <div />}
          <ToggleButton onClick={() => setDailyMode(!isDailyMode)}>
            {isDailyMode ? 'Show Weekly' : 'Show Daily'}
          </ToggleButton>
        </ButtonContainer>
        {isDailyMode ? renderDailySchedule() : renderWeeklySchedule()}
      </Bookings_container>
      {BotNav()}
    </>
  )
}

const renderSubheader = () => {
  return (
    <SubNav>
      <LeftOutlined />
      <Subheader>Oct 8, Friday</Subheader>
    </SubNav>
  )
}

const TopNav = () => (
  <Screen2TopNav>
    <LeftOutlined />
    <Header>Semester 1, Week 7</Header>
    <UnorderedListOutlined />
  </Screen2TopNav>
)
const BotNav = () => (
  <Screen2BotNav>
    <StyledButton src={homeIconUnselected} />
    <StyledButton src={facilitiesIconUnselected} />
    <StyledButton src={calenderIconSelected} />
    <StyledButton src={profileIconUnselected} />
  </Screen2BotNav>
)

const renderDailySchedule = () => (
  <DailyContainer>
    {mockValues.map((e) => (
      <IndividualBookings background={e.type} key={e.id}>
        {e.type === 'academic' ? <CodeFilled style={{ fontSize: '28px' }} /> : null}
        {e.type === 'others' ? <CoffeeOutlined style={{ fontSize: '28px' }} /> : null}
        {e.type === 'hall' ? <StyledButton src={friendsIcon} /> : null}
        <TextContainer>
          <EventText>{e.event}</EventText>
          <LocationText>{e.location}</LocationText>
          <TimeText>{`${e.time.start} - ${e.time.end}`}</TimeText>
        </TextContainer>
      </IndividualBookings>
    ))}
  </DailyContainer>
)

const renderWeeklySchedule = () => (
  <WeekContainer>
    <Timing_container>
      {timings.map((t) => (
        <Time_container key={t}>{t}</Time_container>
      ))}
    </Timing_container>
    {days.map((d) => (
      <>
        <Calendar_container key={d.id}>
          <Days>{d.day}</Days>
          {timings.map((t) => (
            <Day_container key={t.toString() + d.day} day={d.day}>
              {d.day === 'Fri' ? mapEvents(t) : null}
            </Day_container>
          ))}
        </Calendar_container>
      </>
    ))}
  </WeekContainer>
)

// Checks if there is an event at said time, and renders event card for particular event if there is.
const mapEvents = (t: string) => mockValues.map((e) => (e.time.start === t ? renderEventCard(e) : null))

const renderEventCard = (e: Event) => {
  return (
    <EventCard key={e.id} length={getLength(e)} type={e.type}>
      <EventTextWeekly>{e.event}</EventTextWeekly>
      <LocationTextWeekly>{e.location}</LocationTextWeekly>
    </EventCard>
  )
}

const getLength = (e: Event) => {
  return parseInt(e.time.end) - parseInt(e.time.start) / 100
}

const mockValues = [
  { id: 1, event: 'CS1101S Tutorial', location: 'COM1', type: 'academic', time: { start: '0800', end: '1000' } },
  { id: 2, event: 'RHMP Recording', location: 'Raffles Hall', type: 'hall', time: { start: '1000', end: '1200' } },
  { id: 3, event: 'Meetup with friends', location: 'UTown', type: 'others', time: { start: '1200', end: '1400' } },
  { id: 4, event: 'Hall event', location: 'Raffles Hall', type: 'hall', time: { start: '1400', end: '1700' } },
  { id: 5, event: 'GET1020 Lecture', location: 'Online', type: 'academic', time: { start: '1700', end: '1800' } },
]

const timings = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800']

const days = [
  { id: 1, day: 'Mon' },
  { id: 2, day: 'Tue' },
  { id: 3, day: 'Wed' },
  { id: 4, day: 'Thu' },
  { id: 5, day: 'Fri' },
]

type Event = { id: number; event: string; location: string; type: string; time: { start: string; end: string } }

export default Screen2
