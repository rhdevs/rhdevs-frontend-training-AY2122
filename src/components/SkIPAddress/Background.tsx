import React from 'react'
import { StyledContainer, StyledImage } from './styles/Background.styled'
import bgImage from '../../assets/SkIPAddress/images/pattern-bg.png'

const Background = () => {
  return (
    <StyledContainer>
      <StyledImage src={bgImage} />
    </StyledContainer>
  )
}

export default Background
