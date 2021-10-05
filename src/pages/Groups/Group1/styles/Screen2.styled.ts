import styled from 'styled-components'

export const Bookings_container = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  border-style: solid;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const Individual_bookings_1 = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  background-color: #468751;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const Individual_bookings_2 = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  background-color: white;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const Individual_bookings_3 = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  background-color: green;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`
