import styled from 'styled-components'

export const Screen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

export const HeaderAndBookingTitleContainer = styled.div`
  width: 100%;
  height: 35vh;
`

export const HeaderPhoto = styled.img`
  width: 100%;
  height: 35vh;
  object-fit: cover;
`

export const PageHeader = styled.div`
  background: #d9e6df;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  bottom: 10vh;
  position: relative;
  text-align: left;
  font-family: Lato;
  display: inline-block;
  z-index: 0;
  overflow: hidden;
  padding: 10px;
`

export const BookingTitle = styled.div`
  float: left;
  width: max-content;
  line-height: 10vh;
  padding-left: 5vw;
  font-weight: bold;
  font-size: 24px;
`

export const BookingCCA = styled.div`
  float: left;
  width: 25%;
  height: 10vh;
  padding-left: 0.25vw;
  line-height: 10vh;
  font-weight: light;
  font-size: 16px;
`

export const PenLogo = styled.img`
  float: right;
  width: 4vh;
  height: 4vh;
  margin-right: 5vw;
  margin-top: 2vh;
  object-fit: cover;
`

export const BookingDurationAndAuthorContainer = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50%;
  height: 15vh;
  padding-top: 7vh;
  display: flex;
  flex-direction: row;
`
export const BookingDurationAndAuthorOuterContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Figure = styled.figure`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  horizontal-align: center;
  padding: auto;
`

export const Figcaption = styled.figcaption`
  font-family: Lato;
  font-weight: light;
  font-size: 16px;
  text-align: center;
`

export const ClockLogo = styled.img`
  width: auto;
`

export const PeopleLogo = styled.img`
  width: auto;
`

export const BookingTimingContainer = styled.div`
  height: auto;
  padding: 5%;
  text-align: center;
  font-family: Lato;
  font-weight: normal;
  font-size: 14px;
`

export const AdditionalNotesContainer = styled.div`
  width: auto;
  height: auto;
  padding: 3vh;
  font-family: Lato;
  font-size: 14px;
  text-align: left;
  align-self: center;
`

export const AdditionalNotes = styled.div`
  font-weight: bold;
  height: 30%;
`

export const BookingDescription = styled.div`
  font-weight: normal;
  height: 70%;
`

export const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 25vh;
  padding: 10px 0px 0px 0px;
  font-family: Lato;
  align-self: center;
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: max-content;
  color: white;
  font-size: 22px;
  background: linear-gradient(272.25deg, #72ba75 20.66%, #58b994 86.45%);
  border-radius: 20px;
`

export const BottomNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
`
export const StyledButton = styled.img`
  width: 35px;
  position: relative;
`
