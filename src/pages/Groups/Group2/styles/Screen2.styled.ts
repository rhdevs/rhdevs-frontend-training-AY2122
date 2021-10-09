import styled from 'styled-components'

export const MainContainer = styled.div`
  font-size: 2rem;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Screen = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  border: 1px solid black;
`

export const PictureAndTitle = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 35vh;
`

export const Picture = styled.img`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 35vh;
  object-fit: cover;
`

export const BookingTitle = styled.div`
  background: #d9e6df;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 10vh;
  bottom: 10vh;
  position: relative;
  text-align: left;
  font-family: Lato;
  display: inline-block;
  z-index: 0;
  overflow: hidden;
`

export const Title = styled.div`
  float: left;
  width: max-content;
  line-height: 10vh;
  padding-left: 1.5vw;
  font-weight: bold;
  font-size: 24px;
`

export const CCA = styled.div`
  float: left;
  width: 25%;
  height: 10vh;
  padding-left: 0.25vw;
  line-height: 10vh;
  font-weight: light;
  font-size: 16px;
`

export const Pen = styled.img`
  float: right;
  width: 5%;
  height: 10vh;
  margin-right: 2vw;
  line-height: 10vh;
`

export const DurationAndAuthor = styled.div`
  position: relative;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  padding: 8%;
  display: flex;
  flex-direction: row;
`

export const Figure = styled.figure`
  width: 50%;
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

export const Timing = styled.div`
  height: auto;
  padding: 5%;
  text-align: center;
  font-family: Lato;
  font-weight: normal;
  font-size: 14px;
`

export const Notes = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: auto;
  padding: 3vh;
  font-family: Lato;
  font-size: 14px;
  text-align: left;
`

export const AdditionalNotes = styled.div`
  font-weight: bold;
  height: 30%;
`

export const Description = styled.div`
  font-weight: normal;
  height: 70%;
`

export const ConfirmButton = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 25vh;
  padding: 10px 0px 0px 0px;
  font-family: Lato;
  text-align: center;
`

export const Confirm = styled.button`
  width: 40%;
  height: max-content;
  color: white;
  font-size: 22px;
  background: linear-gradient(272.25deg, #72ba75 20.66%, #58b994 86.45%);
  border-radius: 20px;
`

export const BottomNavBar = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  position: fixed;
  bottom: 0;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 50px;
  text-align: center;
`

export const LowerLoungePhoto = styled.div`
  width: 100%;
  height: auto;
`
