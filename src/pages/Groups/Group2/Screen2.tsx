import React from 'react'
import {
  Screen,
  PageHeader,
  BookingTitle,
  BookingCCA,
  PenLogo,
  BookingDurationAndAuthorContainer,
  BookingTimingContainer,
  AdditionalNotesContainer,
  ConfirmButtonContainer,
  ConfirmButton,
  BottomNavBar,
  HeaderAndBookingTitleContainer,
  ClockLogo,
  PeopleLogo,
  Figure,
  Figcaption,
  AdditionalNotes,
  BookingDescription,
  HeaderPhoto,
  BookingDurationAndAuthorOuterContainer,
  StyledButton,
} from './styles/Screen2.styled'
import lowerlounge from '../../../assets/Group2/LowerLounge.svg'
import pen from '../../../assets/Group2/Pen.svg'
import clock from '../../../assets/Group2/Clock.svg'
import people from '../../../assets/Group2/People.svg'
import BotCalendarIcon from '../../../assets/Group2/BottomNavCalendarIcon.svg'
import BotFacilitiesIcon from '../../../assets/Group2/BottomNavFacilitiesIcon.svg'
import BotHomeIcon from '../../../assets/Group2/BottomNavHomeIcon.svg'
import BotProfileIcon from '../../../assets/Group2/BottomNavProfileIcon.svg'

const Screen2 = () => {
  return (
    <>
      <Screen>
        <HeaderAndBookingTitleContainer>
          <HeaderPhoto src={lowerlounge} alt="Lower Lounge photo" />
          <PageHeader>
            <BookingTitle>Bonding Camp</BookingTitle>
            <BookingCCA>RHMP</BookingCCA>
            <PenLogo src={pen} alt="Pen" />
          </PageHeader>
        </HeaderAndBookingTitleContainer>
        <BookingDurationAndAuthorOuterContainer>
          <BookingDurationAndAuthorContainer>
            <Figure>
              <ClockLogo src={clock} alt="Clock logo" />
              <Figcaption>3 hours</Figcaption>
            </Figure>
            <Figure>
              <PeopleLogo src={people} alt="People logo" />
              <Figcaption>Alyssa</Figcaption>
            </Figure>
          </BookingDurationAndAuthorContainer>
        </BookingDurationAndAuthorOuterContainer>
        <BookingTimingContainer>
          Thu, 17/12/21 3:00 PM
          <br />
          To
          <br />
          Thu, 17/12/21 3:00 PM
        </BookingTimingContainer>
        <AdditionalNotesContainer>
          <AdditionalNotes>Additional notes:</AdditionalNotes>
          <BookingDescription>
            Will be using this place for RHMP bonding.
            <br />
            Contact me if you have any question.
          </BookingDescription>
        </AdditionalNotesContainer>
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </ConfirmButtonContainer>
        <BottomNavBar>
          <StyledButton src={BotHomeIcon} />
          <StyledButton src={BotFacilitiesIcon} />
          <StyledButton src={BotCalendarIcon} />
          <StyledButton src={BotProfileIcon} />
        </BottomNavBar>
      </Screen>
    </>
  )
}

export default Screen2
