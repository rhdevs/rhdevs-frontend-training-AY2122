import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import { Reset, SetBillAmount, SetPeopleAmount, SetTipAmount } from '../../../store/tipCalculatorApp/action'

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
  InputCustomAmountField,
} from './styles/TipCalculatorAppStyles'
import DollarIcon from '../../../assets/TipCalculatorApp/icon-dollar.svg'
import PersonIcon from '../../../assets/TipCalculatorApp/icon-person.svg'

export default function TipCalculatorApp() {
  const dispatch = useDispatch()
  const { billAmount, peopleAmount, tipAmount } = useSelector((state: RootState) => state.tipCalculatorApp)
  const [newBillAmount, setNewBillAmount] = useState(0)
  const [newPeopleAmount, setNewPeopleAmount] = useState(0)
  const [customAmount, setCustomAmount] = useState(0)

  const handleNewBillAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setNewBillAmount(e.target.valueAsNumber)
  }

  const handleNewPeopleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPeopleAmount(e.target.valueAsNumber)
  }

  const handleSetCustomAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.valueAsNumber)
  }

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
                <form>
                  <InputField
                    value={newBillAmount}
                    type="number"
                    placeholder={billAmount.toString()}
                    onChange={(e) => {
                      handleNewBillAmount(e)
                    }}
                  />
                </form>
              </InputContainer>
            </ItemContainer>
            <ItemContainer>
              <ItemHeader>Select Tip %</ItemHeader>
              <TipGridBox>
                <TipGridItem
                  onClick={() => {
                    dispatch(SetBillAmount(newBillAmount))
                    dispatch(SetPeopleAmount(newPeopleAmount))
                    dispatch(SetTipAmount(5))
                  }}
                >
                  5%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(SetBillAmount(newBillAmount))
                    dispatch(SetPeopleAmount(newPeopleAmount))
                    dispatch(SetTipAmount(10))
                  }}
                >
                  10%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(SetBillAmount(newBillAmount))
                    dispatch(SetPeopleAmount(newPeopleAmount))
                    dispatch(SetTipAmount(15))
                  }}
                >
                  15%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(SetBillAmount(newBillAmount))
                    dispatch(SetPeopleAmount(newPeopleAmount))
                    dispatch(SetTipAmount(25))
                  }}
                >
                  25%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(SetBillAmount(newBillAmount))
                    dispatch(SetPeopleAmount(newPeopleAmount))
                    dispatch(SetTipAmount(50))
                  }}
                >
                  50%
                </TipGridItem>
                <form>
                  <InputCustomAmountField
                    value={customAmount}
                    type="number"
                    placeholder="Custom"
                    onChange={(e) => {
                      handleSetCustomAmount(e)
                    }}
                    onClick={() => {
                      dispatch(SetBillAmount(newBillAmount))
                      dispatch(SetPeopleAmount(newPeopleAmount))
                      dispatch(SetTipAmount(customAmount))
                    }}
                  />
                </form>
              </TipGridBox>
            </ItemContainer>
            <ItemContainer>
              <ItemHeader>Number of people</ItemHeader>
              <InputContainer>
                <InputIcon src={PersonIcon} alt="dollar sign"></InputIcon>
                <form>
                  <InputField
                    value={newPeopleAmount}
                    type="number"
                    placeholder={peopleAmount.toString()}
                    onChange={(e) => {
                      handleNewPeopleAmount(e)
                    }}
                  />
                </form>
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
                <Amount>{tipAmount.toFixed(2)}</Amount>
              </AmountContainer>
            </NumbersContainer>
            <ResetButtonContainer>
              <ResetButton
                onClick={() => {
                  setNewBillAmount(0)
                  setNewPeopleAmount(0)
                  dispatch(Reset)
                }}
              >
                RESET
              </ResetButton>
            </ResetButtonContainer>
          </ResultContainer>
        </Calculator>
      </MiddleContainer>
    </MainContainer>
  )
}
