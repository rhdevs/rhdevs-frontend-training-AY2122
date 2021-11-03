import React from 'react'
import DarkModeToggleSwitch from './DarkModeToggleSwitch'

import { TitleContainer, TitleText } from './styles/Title.styled'

type Props = {
  text: string
}

const Title = (props: Props) => {
  return (
    <TitleContainer id="title">
      <TitleText id="title-text">{props.text}</TitleText>
      <DarkModeToggleSwitch />
    </TitleContainer>
  )
}

export default Title
