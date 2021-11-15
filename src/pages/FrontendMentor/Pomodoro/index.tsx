import React, { useState, useEffect } from 'react'

import { Modal } from 'antd'

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
  StyledButton,
  ButtonContainer,
  SettingSubheader,
  SettingHeader,
  TimeSettingContainer,
  OptionContainer,
  OptionHeader,
  NumberContainer,
  ArrowContainer,
  Icon,
} from './styles/Pomodoro.styled'
import settingsIcon from '../../../assets/Pomodoro/icon-settings.svg'
import upArrow from '../../../assets/Pomodoro/icon-arrow-up.svg'
import downArrow from '../../../assets/Pomodoro/icon-arrow-down.svg'

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

  useEffect(() => {
    setTimeLeft(times.pomodoro)
  }, [])

  const [pomodoroCount, setPomodoroCount] = useState<number>(0)
  const [currentState, setCurrentState] = useState<string>('pomodoro')
  const [isPaused, setPaused] = useState<boolean>(true)
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60)
  const [isSettingsOpen, setSettingsOpen] = useState<boolean>(false)
  const [times, setTimes] = useState({ pomodoro: 15 * 60, short: 5 * 60, long: 30 * 60 })

  const states = ['pomodoro', 'short', 'long']

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

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen)
    setPaused(true)
  }

  const renderModalFooter = () => (
    <ButtonContainer>
      <StyledButton onClick={toggleSettings}>Apply</StyledButton>
    </ButtonContainer>
  )

  const renderModal = () => (
    <Modal visible={isSettingsOpen} footer={renderModalFooter()} centered maskClosable onCancel={toggleSettings}>
      <SettingHeader>Settings</SettingHeader>
      <SettingSubheader>TIME(MINUTES)</SettingSubheader>
      <TimeSettingContainer>{Object.keys(times).map((key) => renderOptions(key))}</TimeSettingContainer>
    </Modal>
  )

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getTime = (key: string) => times[key] / 60 //same as before ts checks this for some reason?

  const handleTimeChange = (key: string, direction: string) => {
    if (direction === 'up') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimes({ ...times, [key]: times[key] + 60 })
      if (currentState === key) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTimeLeft(times[key]) //idk why this is banned in ts?
      }
      return
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimes({ ...times, [key]: times[key] - 60 })
    if (currentState === key) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeLeft(times[key]) //idk why this is banned in ts?
    }
    return
  }

  const renderOptions = (key: string) => (
    <OptionContainer key={key}>
      <OptionHeader>{key}</OptionHeader>
      <NumberContainer>
        <div>{getTime(key)}</div>
        <ArrowContainer>
          <Icon src={upArrow} onClick={() => handleTimeChange(key, 'up')} />
          <Icon src={downArrow} onClick={() => handleTimeChange(key, 'down')} />
        </ArrowContainer>
      </NumberContainer>
    </OptionContainer>
  )

  return (
    <MainContainer>
      <StyledTitle>pomodoro</StyledTitle>
      {renderLabel()}
      {renderTimer()}
      <StyledSettings src={settingsIcon} onClick={toggleSettings} />
      {renderModal()}
    </MainContainer>
  )
}

export default Pomodoro
