import { Button } from 'antd'
import React from 'react'
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
            <br />
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
            <SignUpButton>
              <Button type="primary">Sign Up</Button>
            </SignUpButton>
          </BottomLeftContainer>
          <BottomRightContainer>
            <BottomRightShort>Why Us</BottomRightShort>
            <BottomRightLong>
              <br />
              Tutorials by industry experts
              <br />
              Peer & expert code review Coding exercises
              <br />
              Access to our GitHub repos
              <br />
              Community Forum Flashcard decks
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
