import React from 'react'

import {
  Bookings_container,
  Individual_bookings_1,
  Individual_bookings_2,
  Individual_bookings_3,
} from './styles/Screen2.styled'

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
