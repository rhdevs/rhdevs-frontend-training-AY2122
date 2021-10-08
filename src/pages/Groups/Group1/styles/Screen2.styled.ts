import styled from 'styled-components'

export const Bookings_container = styled.div<{ fontSize?: string }>`
  margin: 0;
  height: 100%;
  width: 100%;
  color: black;
  padding: 7vh 0;
  border-radius: 5px;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const WeekContainer = styled.div`
  display: flex;
  margin: 2%;
  overflow: auto;
`

export const Calendar_container = styled.div<{ fontSize?: string }>`
  height: 100%;
  width: 100%;
  //margin: 0 0 0 10%;
  color: black;
  display: flex;
  flex-direction: column;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const Timing_container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex-basis: min-content;
`

export const Time_container = styled.div`
  height: 10em;
`

export const Day_container = styled.div<{ fontSize?: string }>`
  margin: 0;
  position: relative;
  height: 10em;
  width: 100%;
  min-width: 8em;
  color: black;
  display: flex;
  border: solid 1px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`
export const Days = styled.div<{ fontSize?: string }>`
  margin: 0;
  height: 2em;
  width: 100%;
  color: black;
  text-align: center;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const TopNav = styled.div`
  width: 100%;
  height: 7vh;
  padding: 1em;
  z-index: 800;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #ffffff;
`
export const BotNav = styled.div`
  width: 100%;
  height: 7vh;
  padding: 1em;
  font-size: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background: #ffffff;
  z-index: 800;
  overflow: hidden;
  bottom: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Header = styled.h1`
  font-size: 23px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 10px;
  text-overflow: ellipsis;
`

export const EventCard = styled.div<{ length?: number; type?: string }>`
  position: absolute;
  left: -1px;
  width: 8em;
  border-radius: 5px;
  border: solid 3px;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  z-index: 100;
  ${(props) => (props.length && props.length > 1 ? `height: calc(2 * 10em);` : `height: 10em;`)}
  ${(props) =>
    props.type && props.type === 'academic'
      ? `background: #468751;`
      : props.type === 'hall'
      ? `background: #72ba75;`
      : `background: white;`}
`

export const IndividualBookings = styled.div<{ background?: string }>`
  margin: 15px 2%;
  border-radius: 5px;
  border: solid 1px;
  padding: 30px;
  color: black;
  ${(props) =>
    props.background && props.background === 'academic'
      ? `background: #468751;`
      : props.background === 'hall'
      ? `background: #72ba75;`
      : `background: white;`}
  white-space: nowrap;
  min-height: 100px;
`
export const EventText = styled.h3<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 200;
`
export const TimeText = styled.h3<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
`

export const ButtonContainer = styled.div`
  height: 100%;
  margin: 15px 2%;
  display: flex;
  justify-content: flex-end;
`

export const ToggleButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  background: #72ba75;
  border-color: #72ba75;
  min-height: 3em;
  min-width: 10em;
`

export const LocationText = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
`

export const StyledButton = styled.img`
  width: 28px;
  max-height: 28px;
`
