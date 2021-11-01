import React from 'react'
import {
  MainContainer,
  Header,
  HeaderWords,
  MiddleContainer,
  Calculator,
  InteractionContainer,
  ItemHeader,
  InputContainer,
  TipGridBox,
  TipGridItem,
  ItemContainer,
} from './styles/TipCalculatorAppStyles'

const TipCalculatorApp = () => {
  return (
    <MainContainer>
      <Header>
        <HeaderWords>
          SPLI
          <br />
          TTER
        </HeaderWords>
      </Header>
      <MiddleContainer>
        <Calculator>
          <InteractionContainer>
            <ItemContainer>
              <ItemHeader>Bill</ItemHeader>
              <InputContainer>$</InputContainer>
            </ItemContainer>
            <ItemContainer>
              <ItemHeader>Select Tip %</ItemHeader>
              <TipGridBox>
                <TipGridItem>5%</TipGridItem>
                <TipGridItem>10%</TipGridItem>
                <TipGridItem>15%</TipGridItem>
                <TipGridItem>25%</TipGridItem>
                <TipGridItem>50%</TipGridItem>
                <TipGridItem>Custom</TipGridItem>
              </TipGridBox>
            </ItemContainer>
            <ItemContainer>
              <ItemHeader>Number of people</ItemHeader>
              <InputContainer>5</InputContainer>
            </ItemContainer>
          </InteractionContainer>
          <InteractionContainer> #2 </InteractionContainer>
        </Calculator>
      </MiddleContainer>
    </MainContainer>
  )
}

export default TipCalculatorApp
