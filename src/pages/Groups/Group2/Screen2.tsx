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
  PictureAndTitle,
} from './styles/Screen2.styled'
import lowerlounge from '../../../assets/Group2/LowerLounge.svg'

const Screen2 = () => {
  return (
    <>
      <MainContainer>
        <Screen>
          <PictureAndTitle>
            <Picture src={lowerlounge} alt="Lower Lounge photo" />
            <BookingTitle>Booking title.</BookingTitle>
          </PictureAndTitle>
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
