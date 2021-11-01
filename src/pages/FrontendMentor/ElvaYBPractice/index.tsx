import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import {
  MainPage,
  MainText,
  MiddleContainer,
  JoinCommText1,
  JoinCommText2,
  JoinCommText3,
  BottomLeftContainer,
  Header2,
  BottomRightContainer,
} from './styles/SinglePriceGridComponent.styled'

const ElvaYBPractice = () => {
  return (
    <MainPage>
      <MainText>
        <MiddleContainer>
          <JoinCommText1> Join our community</JoinCommText1>
          <JoinCommText2>30-day, hassle-free money back guarantee</JoinCommText2>
          <JoinCommText3>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who
            are serious about honing their skills
          </JoinCommText3>
        </MiddleContainer>
        <BottomLeftContainer>
          <Header2>Monthly subscription</Header2>
        </BottomLeftContainer>
        <BottomRightContainer>Why us </BottomRightContainer>
      </MainText>
    </MainPage>
  )
}

export default ElvaYBPractice
