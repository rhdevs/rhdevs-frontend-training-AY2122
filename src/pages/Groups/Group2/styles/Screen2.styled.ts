import styled from 'styled-components'

const bookingTitleTop = 25
const durationAndAuthorTop = 35
const timingTop = durationAndAuthorTop + 15
const notesTop = timingTop + 15
const confirmButtonTop = notesTop + 15

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

export const Picture = styled.div`
  position: fixed;
  top: 0;
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 35vh;
  text-align: center;
`
export const BookingTitle = styled.div`
  position: fixed;
  top: ${bookingTitleTop + 'vh'};
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 10vh;
  text-align: center;
`
export const DurationAndAuthor = styled.div`
  position: fixed;
  top: ${durationAndAuthorTop + 'vh'};
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  text-align: center;
`
export const Timing = styled.div`
  position: fixed;
  top: ${timingTop + 'vh'};
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  text-align: center;
`

export const Notes = styled.div`
  position: fixed;
  top: ${notesTop + 'vh'};
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 15vh;
  text-align: center;
`

export const ConfirmButton = styled.div`
  position: fixed;
  top: ${confirmButtonTop + 'vh'};
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
