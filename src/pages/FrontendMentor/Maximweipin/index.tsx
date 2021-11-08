import React from 'react'
import {
  MainContainer,
  StyledHeader,
  StyledParagraph,
  CardContainer1,
  CardContainer2,
  CardContainer3,
  StyledLogo,
  RoundButton1,
  RoundButton2,
  RoundButton3,
} from './styles/styled'
import { Button } from 'antd'
import luxury from './images/icon-luxury.svg'
import suvs from './images/icon-suvs.svg'
import sedans from './images/icon-sedans.svg'

const Lesson1Example = () => {
  return (
    <MainContainer>
      <CardContainer1 typ={'Sedan'}>
        <StyledLogo src={sedans} />
        <StyledHeader>Sedans</StyledHeader>
        <StyledParagraph>
          Choose a sedan for its testy and excellent fuel economy. Ideal for curising in the city or on your next road
          trip
        </StyledParagraph>
        <Button type="primary" style={RoundButton1}>
          Learn more
        </Button>
      </CardContainer1>
      <CardContainer1 typ={'SUV'}>
        <StyledLogo src={suvs} />
        <StyledHeader>SUVs</StyledHeader>
        <StyledParagraph>
          Take an SUV for its spacious interior, power, and verstality. Perfect for your family vacation and off-road
          adventures.
        </StyledParagraph>
        <Button type="primary" style={RoundButton2}>
          Learn more
        </Button>
      </CardContainer1>
      <CardContainer1>
        <StyledLogo src={luxury} />
        <StyledHeader> Luxury </StyledHeader>
        <StyledParagraph>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and
          arrive in a style.
        </StyledParagraph>
        <Button type="primary" style={RoundButton3}>
          Learn more
        </Button>
      </CardContainer1>
    </MainContainer>
  )
}

export default Lesson1Example
