import React from 'react'
import {
  MainContainer,
  Screen,
  Picture,
  BookingTitle,
  Title,
  CCA,
  DurationAndAuthor,
  Timing,
  Notes,
  ConfirmButton,
  BottomNavBar,
  PictureAndTitle,
  ClockLogo,
  PeopleLogo,
  Figure,
  Figcaption,
} from './styles/Screen2.styled'
import lowerlounge from '../../../assets/Group2/LowerLounge.svg'
import clock from '../../../assets/Group2/Clock.svg'
import people from '../../../assets/Group2/People.svg'

const Screen2 = () => {
  return (
    <>
      <MainContainer>
        <Screen>
          <PictureAndTitle>
            <Picture src={lowerlounge} alt="Lower Lounge photo" />
            <BookingTitle>
              <Title>Bonding Camp</Title>
              <CCA>RHMP</CCA>
            </BookingTitle>
          </PictureAndTitle>
          <DurationAndAuthor>
            <Figure>
              <ClockLogo src={clock} alt="Clock logo" />
              <Figcaption>3 hours</Figcaption>
            </Figure>
            <Figure>
              <PeopleLogo src={people} alt="People logo" />
              <Figcaption>Alyssa</Figcaption>
            </Figure>
          </DurationAndAuthor>
          <Timing>
            Thu, 17/12/21 3:00 PM
            <br />
            To
            <br />
            Thu, 17/12/21 3:00 PM
          </Timing>
          <Notes>Additional notes of bookings</Notes>
          <ConfirmButton>Confirm button.</ConfirmButton>
          <BottomNavBar>Bottom nav bar.</BottomNavBar>
        </Screen>
      </MainContainer>
    </>
  )
}

export default Screen2
