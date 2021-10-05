import styled from 'styled-components'

export const Bookings_container = styled.div<{ fontSize?: string }>`
  margin: 0;
  height: 100%;
  width: 100%;
  color: black;
  padding: 7vh 0px;
  //border-style: solid;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`
export const TopNav = styled.div`
  width: 100%;
  height: 7vh;
  padding: 1em;
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
`

export const IndividualBookings = styled.div<{ background?: string }>`
  margin: 15px 2%;
  border-radius: 5px;
  border: solid 1px;
  padding: 30px;
  color: black;
  ${(props) => (props.background && props.background === 'green' ? `background: #468751;` : `background: white`)}
  white-space: nowrap;
  min-height: 100px;
`
export const EventText = styled.h3<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 200;
`

export const LocationText = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
`

export const StyledButton = styled.img`
  width: 28px;
  max-height: 28px;
`
