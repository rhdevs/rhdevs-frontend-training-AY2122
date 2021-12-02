import React from 'react'
import TimeBoxCard from './TimeBoxCard'
import { TimeBox, TimeCardContainer, TimeCardLabel } from './styles/TimeCard.styled'
type Props = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimeCard = (props: Props) => {
  return (
    <TimeCardContainer>
      <TimeBoxCard value={props.days} label="days" />
      <TimeBoxCard value={props.hours} label="hours" />
      <TimeBoxCard value={props.minutes} label="minutes" />
      <TimeBoxCard value={props.seconds} label="seconds" />
    </TimeCardContainer>
  )
}

export default TimeCard
