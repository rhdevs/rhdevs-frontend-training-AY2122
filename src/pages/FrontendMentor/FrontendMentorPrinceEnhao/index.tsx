import React from 'react'
import {
  MainContainer,
  StyledHeader,
  StyledImg,
  StyledParagraph,
  StyledSubheader,
} from './styles/FrontendMentorPrinceEnhao.styled'
import BackgroundBottom from '../../../assets/princeenhao/bg-pattern-bottom.svg'
import BackgroundCard from '../../../assets/princeenhao/bg-pattern-card.svg'
import BackgroundTop from '../../../assets/princeenhao/bg-pattern-top.svg'
const FrontendMentorPrinceEnhao = () => {
  return (
    <MainContainer>
      <StyledHeader>Welcome to the website</StyledHeader>
      <StyledImg src={BackgroundTop} />
      <StyledParagraph>Description...</StyledParagraph>
      <br />
      <StyledSubheader>Directions</StyledSubheader>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ipsum lacinia, aliquam lectus sit amet, ultrices
        tellus. Fusce posuere risus est, eget tempus metus iaculis posuere. Quisque dui velit, scelerisque non lectus
        ut, mollis vulputate sapien. Curabitur sed mi tincidunt, convallis leo eu, iaculis ex. Aenean nec dui dolor.
        Mauris facilisis faucibus odio et tempor. Nam consequat lorem eu gravida sollicitudin. Phasellus facilisis
        iaculis neque eget luctus. Sed commodo dui sit amet viverra gravida. Cras sed lectus nisl.
        <br />
        <em>Come Join Us!</em>
      </StyledParagraph>
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
