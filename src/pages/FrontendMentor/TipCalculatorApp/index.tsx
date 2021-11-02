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
  InputField,
  ResultContainer,
  ResetButton,
  ResetButtonContainer,
  AmountContainer,
  AmountTypeContainer,
  AmountHeader,
  PerHeader,
  Amount,
  NumbersContainer,
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
                <InputField>142.55</InputField>
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
                <InputField>5</InputField>
              </InputContainer>
            </ItemContainer>
          </InteractionContainer>
          <ResultContainer>
            <NumbersContainer>
              <AmountContainer>
                <AmountTypeContainer>
                  <AmountHeader>Tip Amount</AmountHeader>
                  <PerHeader>/ person</PerHeader>
                </AmountTypeContainer>
                <Amount>$4.27</Amount>
              </AmountContainer>
              <AmountContainer>
                <AmountTypeContainer>
                  <AmountHeader>Total</AmountHeader>
                  <PerHeader>/ person</PerHeader>
                </AmountTypeContainer>
                <Amount>$32.79</Amount>
              </AmountContainer>
            </NumbersContainer>
            <ResetButtonContainer>
              <ResetButton>RESET</ResetButton>
            </ResetButtonContainer>
          </ResultContainer>
        </Calculator>
      </MiddleContainer>
    </MainContainer>
  )
}

export default TipCalculatorApp
