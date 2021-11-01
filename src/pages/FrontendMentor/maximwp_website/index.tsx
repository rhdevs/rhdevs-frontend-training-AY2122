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
} from './styles/styled'
import styled from 'styled-components'

const Lesson1Example = () => {
  return (
    <FullScreenContainer>
      <MainContainer1>
        <StyledHeader>Sedans</StyledHeader>
        <StyledSubheader>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for curising in the city or on your
          next road trip
        </StyledSubheader>
      </MainContainer1>
      <MainContainer2>
        <StyledHeader>SUVs</StyledHeader>
        <StyledSubheader>
          Take an SUV for its spacious interior, power, and verstality. Perfect for your next family vacation and
          off-road adventures
        </StyledSubheader>
      </MainContainer2>
      <MainContainer3>
        <StyledHeader> Luxury </StyledHeader>
        <StyledSubheader>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and
          arrive in a style.
        </StyledSubheader>
      </MainContainer3>
    </FullScreenContainer>
  )
}

export default Lesson1Example
