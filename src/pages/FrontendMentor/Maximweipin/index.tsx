import React from 'react'
import {
  FullScreenContainer,
  StyledHeader,
  StyledParagraph,
  StyledSubheader,
  StyledImg,
  MainContainer1,
  MainContainer2,
  MainContainer3,
  StyledLogo,
} from './styles/styled'
import styled from 'styled-components'
import luxury from './images/icon-luxury.svg'
import suvs from './images/icon-suvs.svg'
import sedans from './images/icon-sedans.svg'

const Lesson1Example = () => {
  return (
    <FullScreenContainer>
      <MainContainer1>
        <StyledLogo src={sedans} />
        <StyledHeader>Sedans</StyledHeader>
        <StyledParagraph>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for curising in the city or on your
          next road trip
        </StyledParagraph>
      </MainContainer1>
      <MainContainer2>
        <StyledLogo src={suvs} />
        <StyledHeader>SUVs</StyledHeader>
        <StyledParagraph>
          Take an SUV for its spacious interior, power, and verstality. Perfect for your next family vacation and
          off-road adventures
        </StyledParagraph>
      </MainContainer2>
      <MainContainer3>
        <StyledLogo src={luxury} />
        <StyledHeader> Luxury </StyledHeader>
        <StyledParagraph>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and
          arrive in a style.
        </StyledParagraph>
      </MainContainer3>
    </FullScreenContainer>
  )
}

export default Lesson1Example
