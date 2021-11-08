import React from 'react'
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
  return (
    <MainContainer>
      <StyledTitle>pomodoro</StyledTitle>
      <StyledLabelContainer>
        <StyledLabel isSelected={true}>pomodoro</StyledLabel>
        <StyledLabel isSelected={false}>short break</StyledLabel>
        <StyledLabel isSelected={false}>long break</StyledLabel>
      </StyledLabelContainer>
      <StyledTimerMainContainer>
        <StyledTimerContainer>
          <StyledTimerSubContainer>
            <StyledTimer>17:59</StyledTimer>
            <StyledPause>PAUSE</StyledPause>
          </StyledTimerSubContainer>
        </StyledTimerContainer>
      </StyledTimerMainContainer>
      <StyledSettings src={settingsIcon} />
    </MainContainer>
  )
}

export default Pomodoro
