import React from 'react'
import { BottomBackground, MainContainer, TopBackground } from './styles/FrontendMentorPrinceEnhao.styled'
import ProfileCard from '../../../components/ProfileCard'
import BackgroundBottom from '../../../assets/princeenhao/bg-pattern-bottom.svg'
import BackgroundCard from '../../../assets/princeenhao/bg-pattern-card.svg'
import BackgroundTop from '../../../assets/princeenhao/bg-pattern-top.svg'
import ProfilePicture from '../../../assets/princeenhao/image-victor.jpg'
const FrontendMentorPrinceEnhao = () => {
  return (
    <MainContainer>
      <ProfileCard
        Background={BackgroundCard}
        ProfilePic={ProfilePicture}
        Name="Victor Crest"
        Age={26}
        Location="London"
        Followers={80}
        Likes={803}
        Photos={1.4}
      />
      <TopBackground src={BackgroundTop} />
      <BottomBackground src={BackgroundBottom} />
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
