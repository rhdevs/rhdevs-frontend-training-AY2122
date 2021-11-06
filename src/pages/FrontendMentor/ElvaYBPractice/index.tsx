import React from 'react'
import { ButtonContainer } from '../../Groups/Group1/styles/Screen2.styled'
import {
  MainPage,
  MainContainer,
  MiddleContainer,
  JoinCommText1,
  JoinCommText2,
  JoinCommText3,
  BottomLeftContainer,
  BottomRightContainer,
  BottomContainer,
  SignUpButton,
  BottomLeftMonthly,
  BottomLeftPrice,
  BottomLeftPerMonth,
  BottomLeftFullAccess,
  PriceAndPerMonth,
  BottomRightShort,
  BottomRightLong,
} from './styles/SinglePriceGridComponent.styled'

const ElvaYBPractice = () => {
  return (
    <MainPage>
      <MainContainer>
        <MiddleContainer>
          <JoinCommText1>Join our community</JoinCommText1>
          <JoinCommText2>30-day, hassle-free money back guarantee</JoinCommText2>
          <JoinCommText3>
            Gain access to our full library of tutorials along with expert code reviews.
            <br />
            Perfect for any developers who are serious about honing their skills.
          </JoinCommText3>
        </MiddleContainer>
        <BottomContainer>
          <BottomLeftContainer>
            <BottomLeftMonthly>Monthly subscription</BottomLeftMonthly>
            <PriceAndPerMonth>
              <BottomLeftPrice>$29</BottomLeftPrice>
              <BottomLeftPerMonth>per month</BottomLeftPerMonth>
            </PriceAndPerMonth>
            <BottomLeftFullAccess>Full access for less than $1 a day</BottomLeftFullAccess>
            <SignUpButton>Sign Up</SignUpButton>
          </BottomLeftContainer>
          <BottomRightContainer>
            <BottomRightShort>Why Us</BottomRightShort>
            <BottomRightLong>
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
            </BottomRightLong>
          </BottomRightContainer>
        </BottomContainer>
      </MainContainer>
    </MainPage>
  )
}

export default ElvaYBPractice
