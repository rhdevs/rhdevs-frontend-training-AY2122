import React, { useState, useEffect } from 'react'
import {
  MainContainer,
  StyledTitle,
  StyledLabel,
  StyledLabelContainer,
  StyledTimerContainer,
  StyledTimerSubContainer,
  StyledPause,
  StyledTimer,
  StyledSettings,
  StyledTimerMainContainer,
} from './styles/Pomodoro.styled'
import settingsIcon from '../../../assets/Pomodoro/icon-settings.svg'

const Pomodoro = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      !isPaused && setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => {
      !isPaused && clearTimeout(timer)
    }
  })

  useEffect(() => {
    timeLeft === 0 && nextState()
  })

  const [pomodoroCount, setPomodoroCount] = useState<number>(0)
  const [currentState, setCurrentState] = useState<string>('pomodoro')
  const [isPaused, setPaused] = useState<boolean>(true)
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60)

  const states = ['pomodoro', 'short', 'long']
  const times = { pomodoro: 15 * 60, short: 5 * 60, long: 30 * 60 }

  const nextState = () => {
    switch (currentState) {
      case 'pomodoro': {
        setPomodoroCount(pomodoroCount + 1)
        if (pomodoroCount >= 4) {
          switchState('long')
          return
        }
        switchState('short')
        return
      }
      case 'short': {
        switchState('pomodoro')
        return
      }
      case 'long': {
        switchState('pomodoro')
        setPomodoroCount(0)
        return
      }
      default:
        return
    }
  }

  const getTimeLeft = () => {
    return [Math.floor(timeLeft / 60), Math.floor(timeLeft % 60)]
  }

  const togglePause = () => {
    setPaused(!isPaused)
    return
  }

  const timeToString = () => {
    const timeArray = getTimeLeft()
    const seconds = timeArray[1].toString().length === 1 ? '0' + timeArray[1].toString() : timeArray[1].toString()
    return timeArray[0].toString() + ':' + seconds
  }

  const switchState = (state: string) => {
    setCurrentState(state)
    setPaused(true)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeLeft(times[state]) //idk why this is banned in ts?
  }

  const renderLabel = () => (
    <StyledLabelContainer>
      {states.map((state) => (
        <StyledLabel isSelected={currentState === state} onClick={() => switchState(state)} key={state}>
          {state}
        </StyledLabel>
      ))}
    </StyledLabelContainer>
  )

  function getPauseText() {
    return isPaused ? 'START' : 'PAUSE'
  }

  const renderTimer = () => (
    <StyledTimerMainContainer onClick={togglePause}>
      <StyledTimerContainer>
        <StyledTimerSubContainer>
          <StyledTimer>{timeToString()}</StyledTimer>
          <StyledPause>{getPauseText()}</StyledPause>
        </StyledTimerSubContainer>
      </StyledTimerContainer>
    </StyledTimerMainContainer>
  )

  return (
    <MainContainer>
      <StyledTitle>pomodoro</StyledTitle>
      {renderLabel()}
      {renderTimer()}
      <StyledSettings src={settingsIcon} />
    </MainContainer>
  )
}

export default Pomodoro
