import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { MainPage, MainText, Header1, Text1, Text2, Body1, Header2 } from './styles/SinglePriceGridComponent.styled'

const ElvaYBPractice = () => {
  return (
    <MainPage>
      <MainText>
        <Header1>Join our community</Header1>
        <Text1>30-day, hassle-free money back guarantee</Text1>
        <Text2>
          Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who
          are serious about honing their skills.
        </Text2>
        <Body1>
          <Header2>Monthly subscription</Header2>
        </Body1>
      </MainText>
    </MainPage>
  )
}

export default ElvaYBPractice
