import React from 'react'

import { TitleContainer, TitleText } from './styles/Title.styled'

type Props = {
  text: string
}
const Title = (props: Props) => {
  return (
    <TitleContainer>
      <TitleText>{props.text}</TitleText>
    </TitleContainer>
  )
}

export default Title
