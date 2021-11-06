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
        background={BackgroundCard}
        profilePic={ProfilePicture}
        name="Victor Crest"
        age={26}
        location="London"
        followers={80}
        likes={803}
        photos={1.4}
      />
      <TopBackground src={BackgroundTop} />
      <BottomBackground src={BackgroundBottom} />
    </MainContainer>
  )
}

export default FrontendMentorPrinceEnhao
