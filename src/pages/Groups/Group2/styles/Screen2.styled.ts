import styled from 'styled-components'

export const MainContainer = styled.div`
  font-size: 2rem;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Screen = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
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
  border: 1px solid red;
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
  width: 65%;
  line-height: 10vh;
  padding-left: 3vh;
  font-weight: bold;
  font-size: 24px;
`

export const CCA = styled.div`
  float: left;
  width: 25%;
  height: 10vh;
  line-height: 11vh;
  font-weight: light;
  font-size: 16px;
  border: 1px solid red;
`

export const Pen = styled.img`
  float: left;
  width: 5%;
  height: 10vh;
  line-height: 10vh;
  border: 1px solid red;
`

export const DurationAndAuthor = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 20vh;
  padding: 8%;
  display: flex;
  flex-direction: row;
`
export const Figure = styled.figure`
  width: 50%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
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
  border: 1px solid red;
  height: auto;
  padding: 5%;
  text-align: center;
  font-family: Lato;
  font-weight: normal;
  font-size: 14px;
`

export const Notes = styled.div`
  border: 1px solid red;
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
  border: 1px solid red;
  font-weight: normal;
  height: 70%;
`

export const ConfirmButton = styled.div`
  border: 1px solid red;
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
  position: fixed;
  bottom: 0;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 50px;
  text-align: center;
  border: 1px solid red;
`

export const LowerLoungePhoto = styled.div`
  width: 100%;
  height: auto;
`
