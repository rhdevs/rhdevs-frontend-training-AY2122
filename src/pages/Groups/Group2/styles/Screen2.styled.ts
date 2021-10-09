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
  height: 100vh;
`

export const PictureAndTitle = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 45vh;
`

export const Picture = styled.img`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 35vh;
`
export const BookingTitle = styled.div`
  border: 1px solid red;
  background: white;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 10vh;
  bottom: 10vh;
  position: relative;
  text-align: center;
  z-index: 0;
`
export const DurationAndAuthor = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  padding: 8%;
`
export const Figure = styled.figure`
  left: 0;
  width: 50%;
  vertical-align: centre;
  display: inline-block;
`

export const Figcaption = styled.figcaption`
  font-family: Lato-regular;
  font-size: 16px;
  display: inline-block;
`

export const ClockLogo = styled.img`
  width: auto;
  left: 0;
  float: left;
  margin-left: 20%;
`

export const PeopleLogo = styled.img`
  width: auto;
  right: 0;
  float: right;
  margin-right: 20%;
`

export const Timing = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  text-align: center;
`

export const Notes = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  text-align: center;
`

export const ConfirmButton = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  text-align: center;
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
