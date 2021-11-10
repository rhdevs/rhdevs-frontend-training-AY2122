import React from 'react'

import { Countdown, TimeBox } from './styles/TimeCard.styled'
type Props = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimeCard = (props: Props) => {
  return (
    <>
      <TimeBox>
        <TimeBox className="tophalf" />
        <TimeBox className="bottomhalf" />
        <TimeBox className="bar" />
        <TimeBox className="right-curve" />
        <TimeBox className="left-curve" />
      </TimeBox>
      <Countdown>
        {props.days} days {props.hours} hours {props.minutes} minutes {props.seconds} seconds
      </Countdown>
    </>
  )
}

export default TimeCard
