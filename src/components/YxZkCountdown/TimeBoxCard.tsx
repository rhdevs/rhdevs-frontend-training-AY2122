import React from 'react'

import { Countdown, TimeBox, TimeCardContainer, TimeCardLabel } from './styles/TimeCard.styled'
type Props = {
  value: number
  label: string
}

const TimeBoxCard = (props: Props) => {
  return (
    <TimeBox>
      <TimeBox className="tophalf" />
      <TimeBox className="bottomhalf" />
      <TimeBox className="bar" />
      <TimeBox className="number">{props.value}</TimeBox>
      <TimeBox className="right-curve" />
      <TimeBox className="left-curve" />
      <TimeCardLabel>{props.label}</TimeCardLabel>
    </TimeBox>
  )
}

export default TimeBoxCard
