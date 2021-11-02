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
  InputIcon,
} from './styles/TipCalculatorAppStyles'
import DollarIcon from '../../../assets/TipCalculatorApp/icon-dollar.svg'
import PersonIcon from '../../../assets/TipCalculatorApp/icon-person.svg'

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
              <InputContainer>
                <InputIcon src={DollarIcon} alt="dollar sign"></InputIcon>
              </InputContainer>
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
              <InputContainer>
                <InputIcon src={PersonIcon} alt="dollar sign"></InputIcon>
              </InputContainer>
            </ItemContainer>
          </InteractionContainer>
          <InteractionContainer> #2 </InteractionContainer>
        </Calculator>
      </MiddleContainer>
    </MainContainer>
  )
}

export default TipCalculatorApp
