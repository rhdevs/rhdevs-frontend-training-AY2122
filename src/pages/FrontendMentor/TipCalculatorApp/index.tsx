import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'

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
  TipGridCustomItem,
} from './styles/TipCalculatorAppStyles'
import DollarIcon from '../../../assets/TipCalculatorApp/icon-dollar.svg'
import PersonIcon from '../../../assets/TipCalculatorApp/icon-person.svg'

export default function TipCalculatorApp() {
  const { billAmount, peopleAmount, tipAmount, totalAmount } = useSelector((state: RootState) => state.tipCalculatorApp)

  return (
    <MainContainer>
      <Header>
        <HeaderWords>
          S P L I<br />T T E R
        </HeaderWords>
      </Header>
      <MiddleContainer>
        <Calculator>
          <InteractionContainer>
            <ItemContainer>
              <ItemHeader>Bill</ItemHeader>
              <InputContainer>
                <InputIcon src={DollarIcon} alt="dollar sign"></InputIcon>
                <InputField>{billAmount}</InputField>
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
                <TipGridCustomItem>Custom</TipGridCustomItem>
              </TipGridBox>
            </ItemContainer>
            <ItemContainer>
              <ItemHeader>Number of people</ItemHeader>
              <InputContainer>
                <InputIcon src={PersonIcon} alt="dollar sign"></InputIcon>
                <InputField>{peopleAmount}</InputField>
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
                <Amount>{tipAmount.toFixed(2)}</Amount>
              </AmountContainer>
              <AmountContainer>
                <AmountTypeContainer>
                  <AmountHeader>Total</AmountHeader>
                  <PerHeader>/ person</PerHeader>
                </AmountTypeContainer>
                <Amount>{totalAmount.toFixed(2)}</Amount>
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
