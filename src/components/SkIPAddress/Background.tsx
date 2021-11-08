import React from 'react'
import { StyledContainer, StyledImage } from './styles/Background.styled'
import BgImage from '../../assets/SkIPAddress/images/pattern-bg.png'

const Background = () => {
  return (
    <StyledContainer>
      <StyledImage src={BgImage} />
    </StyledContainer>
  )
}

export default Background
