import React from 'react'

import {
  MainPage,
  InformationCard,
  InformationContainer,
  ImageContainer,
  Image,
  Header,
  Highlight,
  DescriptionText,
  StatsContainer,
} from './styles/KYStatsCard.styled'
import image from '../../../assets/kyfrontendmentor/image-header-desktop.jpg'
import StatsBox from '../../../components/KYSinglePriceGridComponent/StatsBox'

const KYStatsCard = () => {
  return (
    <MainPage>
      <InformationCard>
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>
        <InformationContainer>
          <Header>
            Get <Highlight>insights</Highlight> that help your business grow.
          </Header>
          <DescriptionText>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
            and overall efficiency.
          </DescriptionText>
          <StatsContainer>
            <StatsBox number="10k+" text="COMPANIES"></StatsBox>
            <StatsBox number="314" text="TEMPLATES"></StatsBox>
            <StatsBox number="12M+" text="QUERIES"></StatsBox>
          </StatsContainer>
        </InformationContainer>
      </InformationCard>
    </MainPage>
  )
}

export default KYStatsCard
