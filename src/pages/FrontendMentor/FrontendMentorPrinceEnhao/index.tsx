import React from 'react'
import {
  BottomBackground,
  MainContainer,
  ProfileCardContainer,
  ProfileCardBackground,
  ProfileCardBottom,
  ProfileCardBigWords,
  ProfileCardSmallWords,
  ProfileCardWordsContainer,
  StyledImg,
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
        <ProfileCardBackground src={BackgroundCard} />
        <ProfilePicContainer>
          <StyledImg src={ProfilePicture} />
        </ProfilePicContainer>
        <NameAgeContainer>
          <text style={{ fontSize: 1.5 + 'rem', color: 'black', fontWeight: 'bold', fontFamily: 'Kumbh Sans' }}>
            Victor Crest <text style={{ color: 'grey' }}>26</text>
          </text>
          <ProfileCardSmallWords fontSize="1rem">London</ProfileCardSmallWords>
        </NameAgeContainer>
        <ProfileCardBottom>
          <ProfileCardWordsContainer>
            <ProfileCardBigWords>80k</ProfileCardBigWords>
            <ProfileCardSmallWords>Followers</ProfileCardSmallWords>
          </ProfileCardWordsContainer>
          <ProfileCardWordsContainer>
            <ProfileCardBigWords>803k</ProfileCardBigWords>
            <ProfileCardSmallWords>Likes</ProfileCardSmallWords>
          </ProfileCardWordsContainer>
          <ProfileCardWordsContainer>
            <ProfileCardBigWords>1.4k</ProfileCardBigWords>
            <ProfileCardSmallWords>Photos</ProfileCardSmallWords>
          </ProfileCardWordsContainer>
        </ProfileCardBottom>
      </ProfileCardContainer>
      <TopBackground src={BackgroundTop} />
      <BottomBackground src={BackgroundBottom} />
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
