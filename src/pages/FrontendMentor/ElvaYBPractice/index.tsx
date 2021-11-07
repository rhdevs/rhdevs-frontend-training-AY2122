import React from 'react'

import {
  MainPage,
  MainContainer,
  JoinCommHeader,
  JoinCommSubHeader,
  JoinCommBody,
  BottomComponent,
  LeftComponent,
  RightComponent,
  SignUpButton,
  LeftHeader,
  LeftPrice,
  LeftPerMonth,
  LeftFullAccess,
  PriceAndPerMonth,
  RightHeader,
  RightBody,
} from './styles/SinglePriceGridComponent.styled'
import TopComponent from '../../../components/ElvaYBPractice/TopComponent'

const ElvaYBPractice = () => {
  return (
    <MainPage>
      <MainContainer>
        <TopComponent />
        <BottomComponent>
          <LeftComponent>
            <LeftHeader>Monthly subscription</LeftHeader>
            <PriceAndPerMonth>
              <LeftPrice>$29</LeftPrice>
              <LeftPerMonth>per month</LeftPerMonth>
            </PriceAndPerMonth>
            <LeftFullAccess>Full access for less than $1 a day</LeftFullAccess>
            <SignUpButton>Sign Up</SignUpButton>
          </LeftComponent>
          <RightComponent>
            <RightHeader>Why Us</RightHeader>
            <RightBody>
              Tutorials by industry experts
              <br />
              Peer & expert code review
              <br />
              Coding exercises
              <br />
              Access to our GitHub repos
              <br />
              Community Forum
              <br />
              Flashcard decks
              <br />
              New videos every week
            </RightBody>
          </RightComponent>
        </BottomComponent>
      </MainContainer>
    </MainPage>
  )
}

export default ElvaYBPractice
