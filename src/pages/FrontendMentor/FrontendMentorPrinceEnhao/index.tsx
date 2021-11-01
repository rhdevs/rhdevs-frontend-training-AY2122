import React from 'react'
import {
  BottomBackground,
  MainContainer,
  ProfileCardContainer,
  ProfileCardBackground,
  ProfileCardMiddle,
  ProfileCardBottom,
  ProfileCardBigWords,
  ProfileCardSmallWords,
  ProfileCardWordsContainer,
  StyledImg,
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
        <ProfileCardMiddle></ProfileCardMiddle>
        <ProfileCardBottom>
          <ProfileCardWordsContainer>
            <ProfileCardBigWords>80k</ProfileCardBigWords>
            <ProfileCardSmallWords>Followers</ProfileCardSmallWords>
          </ProfileCardWordsContainer>
          <ProfileCardWordsContainer>
            <ProfileCardBigWords>803k</ProfileCardBigWords>
            {/* <ProfileCardSmallWords>Likes</ProfileCardSmallWords> */}
          </ProfileCardWordsContainer>
          <ProfileCardWordsContainer>
            <ProfileCardBigWords>1.4k</ProfileCardBigWords>
            {/* <ProfileCardSmallWords>Photos</ProfileCardSmallWords> */}
          </ProfileCardWordsContainer>
        </ProfileCardBottom>
      </ProfileCardContainer>
      <TopBackground src={BackgroundTop} />
      <BottomBackground src={BackgroundBottom} />
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
