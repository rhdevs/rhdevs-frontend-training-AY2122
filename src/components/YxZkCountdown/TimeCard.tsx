import React from 'react'

import { Countdown, TimeBox, TimeCardContainer, TimeCardLabel } from './styles/TimeCard.styled'
type Props = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimeCard = (props: Props) => {
  return (
    <TimeCardContainer>
      <TimeBox>
        <TimeBox className="tophalf" />
        <TimeBox className="bottomhalf" />
        <TimeBox className="bar" />
        <TimeBox className="number">{props.days}</TimeBox>
        <TimeBox className="right-curve" />
        <TimeBox className="left-curve" />
        <TimeCardLabel>Days</TimeCardLabel>
      </TimeBox>
      <TimeBox>
        <TimeBox className="tophalf" />
        <TimeBox className="bottomhalf" />
        <TimeBox className="bar" />
        <TimeBox className="number">{props.hours}</TimeBox>
        <TimeBox className="right-curve" />
        <TimeBox className="left-curve" />
        <TimeCardLabel>Hours</TimeCardLabel>
      </TimeBox>
      <TimeBox>
        <TimeBox className="tophalf" />
        <TimeBox className="bottomhalf" />
        <TimeBox className="bar" />
        <TimeBox className="number">{props.minutes}</TimeBox>
        <TimeBox className="right-curve" />
        <TimeBox className="left-curve" />
        <TimeCardLabel>Minutes</TimeCardLabel>
      </TimeBox>
      <TimeBox>
        <TimeBox className="tophalf" />
        <TimeBox className="bottomhalf" />
        <TimeBox className="bar" />
        <TimeBox className="number">{props.seconds}</TimeBox>
        <TimeBox className="right-curve" />
        <TimeBox className="left-curve" />
        <TimeCardLabel>Seconds</TimeCardLabel>
      </TimeBox>
    </TimeCardContainer>
  )
}

export default TimeCard
