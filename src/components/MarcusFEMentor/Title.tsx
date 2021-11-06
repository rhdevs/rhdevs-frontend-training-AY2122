import React from 'react'

import DarkModeToggleSwitch from './DarkModeToggleSwitch'
import { TitleContainer, TitleText } from './styles/Title.styled'

const Title = ({ text }: { text: string }) => {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
      <DarkModeToggleSwitch />
    </TitleContainer>
  )
}

export default Title
