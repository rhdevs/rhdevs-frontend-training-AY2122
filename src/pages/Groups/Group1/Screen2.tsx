import React from 'react'

import styled from 'styled-components'

const Bookings_container = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  border-style: solid;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

const Individual_bookings_1 = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  background-color: #468751;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

const Individual_bookings_2 = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  background-color: white;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

const Individual_bookings_3 = styled.div<{ fontSize?: string }>`
  margin: 0;
  color: black;
  background-color: green;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

const Screen2 = () => {
  return (
    <>
      <Bookings_container>
        <Individual_bookings_1>
          <div>Event Name</div>
          <div>Location</div>
        </Individual_bookings_1>

        <Individual_bookings_2>
          <div>Event Name</div>
          <div>Location</div>
        </Individual_bookings_2>

        <Individual_bookings_3>
          <div>Event Name</div>
          <div>Location</div>
        </Individual_bookings_3>

        <Individual_bookings_2>
          <div>Event Name</div>
          <div>Location</div>
        </Individual_bookings_2>

        <Individual_bookings_1>
          <div>Event Name</div>
          <div>Location</div>
        </Individual_bookings_1>
      </Bookings_container>
    </>
  )
}

export default Screen2
