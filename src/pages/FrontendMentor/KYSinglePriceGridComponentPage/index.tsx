import React from 'react'
import {
  MainPage,
  TopInformation,
  Header,
  SubHeader,
  BodyText,
  BottomInformation,
  Subscription,
  AdditionalInformation,
  BottomInformationHeader,
  SubscriptionAmountContainer,
  SubscriptionAmount,
  SubscriptionRate,
  SubscriptionDetails,
  Links,
} from './styles/KYSinglePriceGridComponentPage.styled'

const KYSinglePriceGridComponentPage = () => {
  return (
    <MainPage>
      <TopInformation>
        <Header>Join our community</Header>
        <SubHeader>30-day, hassle-free money back guarantee</SubHeader>
        <BodyText>
          Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who
          are serious about honing their skills.
        </BodyText>
      </TopInformation>
      <BottomInformation>
        <Subscription>
          <BottomInformationHeader>Monthly Subscription</BottomInformationHeader>
          <SubscriptionAmountContainer>
            <SubscriptionAmount>$29</SubscriptionAmount>
            <SubscriptionRate>per month</SubscriptionRate>
          </SubscriptionAmountContainer>
          <SubscriptionDetails>Full access for less than $1 a day</SubscriptionDetails>
        </Subscription>
        <AdditionalInformation>
          <BottomInformationHeader>Why Us</BottomInformationHeader>
          <Links>Tutorials by Industry Experts</Links>
          <Links>Peer & expert code review</Links>
          <Links>Coding exercises</Links>
          <Links>Access to our GitHub repos</Links>
          <Links>Community forum</Links>
          <Links>Flashcard deck</Links>
          <Links>New videos every week</Links>
        </AdditionalInformation>
      </BottomInformation>
    </MainPage>
  )
}

export default KYSinglePriceGridComponentPage
