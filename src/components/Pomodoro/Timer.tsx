import {
  StyledPause,
  StyledTimer,
  StyledTimerContainer,
  StyledTimerMainContainer,
  StyledTimerSubContainer,
} from './styles/Timer.styled'
import CircularProgress from './CircularProgress'
import React from 'react'

const Timer = (props: {
  onClick: () => void
  timeLeft: number
  times: Record<string, number>
  currentState: string
  s: string
  pauseText: string
}) => {
  return (
    <StyledTimerMainContainer onClick={props.onClick}>
      <StyledTimerContainer>
        <CircularProgress percent={props.timeLeft / props.times[props.currentState]} />
        <StyledTimerSubContainer>
          <StyledTimer>{props.s}</StyledTimer>
          <StyledPause>{props.pauseText}</StyledPause>
        </StyledTimerSubContainer>
      </StyledTimerContainer>
    </StyledTimerMainContainer>
  )
}

export default Timer
