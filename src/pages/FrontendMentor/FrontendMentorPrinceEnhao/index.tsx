import React from 'react'
import {
  BottomBackground,
  MainContainer,
  ProfileCardContainer,
  StyledImg,
  ProfileCardBackground,
  StyledSubheader,
  TopBackground,
} from './styles/FrontendMentorPrinceEnhao.styled'
import BackgroundBottom from '../../../assets/princeenhao/bg-pattern-bottom.svg'
import BackgroundCard from '../../../assets/princeenhao/bg-pattern-card.svg'
import BackgroundTop from '../../../assets/princeenhao/bg-pattern-top.svg'
const FrontendMentorPrinceEnhao = () => {
  return (
    <MainContainer>
      <ProfileCardContainer>
        <ProfileCardBackground src={BackgroundCard} />
      </ProfileCardContainer>
      <TopBackground src={BackgroundTop} />
      <BottomBackground src={BackgroundBottom} />
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
