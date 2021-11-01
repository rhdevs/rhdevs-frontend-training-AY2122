import React from 'react'
import {
  BottomBackground,
  MainContainer,
  ProfileCardContainer,
  StyledImg,
  ProfileCardBackground,
  StyledSubheader,
  TopBackground,
  NameAgeContainer,
  ProfilePicContainer,
} from './styles/FrontendMentorPrinceEnhao.styled'
import BackgroundBottom from '../../../assets/princeenhao/bg-pattern-bottom.svg'
import BackgroundCard from '../../../assets/princeenhao/bg-pattern-card.svg'
import BackgroundTop from '../../../assets/princeenhao/bg-pattern-top.svg'
import ProfilePicture from '../../../assets/princeenhao/image-victor.jpg'
const FrontendMentorPrinceEnhao = () => {
  return (
    <MainContainer>
      <ProfileCardContainer>
        <ProfileCardBackground src={BackgroundCard}></ProfileCardBackground>
        <ProfilePicContainer>
          <StyledImg src={ProfilePicture} />
        </ProfilePicContainer>
        <NameAgeContainer></NameAgeContainer>
      </ProfileCardContainer>
      <TopBackground src={BackgroundTop} />
      <BottomBackground src={BackgroundBottom} />
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
