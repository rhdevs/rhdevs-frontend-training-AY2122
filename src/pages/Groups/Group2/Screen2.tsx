import React from 'react'
import {
  MainContainer,
  Screen,
  Picture,
  BookingTitle,
  DurationAndAuthor,
  Timing,
  Notes,
  ConfirmButton,
  BottomNavBar,
} from './styles/Screen2.styled'

const Screen2 = () => {
  return (
    <>
      <MainContainer>
        <Screen>
          <Picture>Venue picture.</Picture>
          <BookingTitle>Booking title.</BookingTitle>
          <DurationAndAuthor>Booking duration and author.</DurationAndAuthor>
          <Timing>Timing of booking.</Timing>
          <Notes>Additional notes of bookings</Notes>
          <ConfirmButton>Confirm button.</ConfirmButton>
          <BottomNavBar>Bottom nav bar.</BottomNavBar>
        </Screen>
      </MainContainer>
    </>
  )
}

export default Screen2
