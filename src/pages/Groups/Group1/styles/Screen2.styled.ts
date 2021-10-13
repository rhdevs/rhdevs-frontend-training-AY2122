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
  overflow-y: auto;
`

export const Calendar_container = styled.div<{ fontSize?: string }>`
  height: 100%;
  width: 100%;
  //margin: 0 0 0 10%;
  color: black;
  display: flex;
  flex-direction: column;
  //overflow: hidden;
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

export const Day_container = styled.div<{ fontSize?: string; key?: string; day?: string }>`
  margin: 0;
  position: relative;
  height: 10em;
  width: 100%;
  min-width: 8em;
  color: black;
  display: flex;
  border: solid 1px;
  border-color: #ede0e0;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
  ${(props) =>
    props.day === 'Tue'
      ? 'background-color: #f9f9f9'
      : props.day === 'Thu'
      ? 'background-color: #f9f9f9'
      : 'background-color: #ffffff'}
`
export const Days = styled.div<{ fontSize?: string }>`
  margin: 0;
  height: 2em;
  width: 100%;
  color: black;
  text-align: center;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const Screen2TopNav = styled.div`
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
export const Screen2BotNav = styled.div`
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

export const Subheader = styled.h2`
  font-size: 18px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 10px;
  text-overflow: ellipsis;
`

export const SubNav = styled.div`
  display: flex;
  align-items: center;
`

export const EventCard = styled.div<{ length?: number; type?: string }>`
  position: absolute;
  min-width: 8em;
  left: -1px;
  width: 100%;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  z-index: 100;
  border-radius: 20px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.25);
  ${(props) => (props.length && props.length > 1 ? `height: calc(2 * 10em);` : `height: 10em;`)}
  ${(props) =>
    props.type && props.type === 'academic'
      ? `background: #468751;`
      : props.type === 'hall'
      ? `background: #72ba75;`
      : `background: #ffffff;`}
`

export const DailyContainer = styled.div`
  margin: 15px 2%;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 2px;
`

export const IndividualBookings = styled.div<{ background?: string }>`
  margin: 15px 2%;
  border-radius: 5px;
  padding: 30px;
  color: #ffffff;
  ${(props) =>
    props.background && props.background === 'academic'
      ? `background: #468751;`
      : props.background === 'hall'
      ? `background: #72ba75;`
      : `background: #ffffff; border: solid 1px; color: black;`}
  white-space: nowrap;
  min-height: 100px;
`

export const EventTextWeekly = styled.h3<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  margin-left: 0.8em;
  margin-top: 1em;
`
export const LocationTextWeekly = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 300;
  margin-left: 1em;
  margin-top: -0.5em;
`
export const EventText = styled.h3<{ fontSize?: string }>`
  color: inherit;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 350;
`

export const TimeText = styled.h3<{ fontSize?: string }>`
  color: inherit;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 350;
`
export const LocationText = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
`

export const ButtonContainer = styled.div`
  height: 100%;
  margin: 15px 2%;
  display: flex;
  justify-content: space-between;
`

export const ToggleButton = styled.button`
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-style: none;
  background: #72ba75;
  border-color: #72ba75;
  min-height: 3em;
  min-width: 8em;
`

export const StyledButton = styled.img`
  width: 28px;
  max-height: 28px;
`
