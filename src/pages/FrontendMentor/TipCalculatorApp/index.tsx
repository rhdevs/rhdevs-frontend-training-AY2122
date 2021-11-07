import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import {
  Reset,
  setBillAmount,
  setPeopleAmount,
  setTipAmount,
  setTotalAmount,
} from '../../../store/tipCalculatorApp/action'

import {
  MainContainer,
  Header,
  HeaderWords,
  MiddleContainer,
  Calculator,
  InteractionContainer,
  ItemHeader,
  InputContainer,
  InputPeopleContainer,
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
  ItemHeaderContainer,
  Warning,
} from './styles/TipCalculatorAppStyles'
import DollarIcon from '../../../assets/TipCalculatorApp/icon-dollar.svg'
import PersonIcon from '../../../assets/TipCalculatorApp/icon-person.svg'

export default function TipCalculatorApp() {
  const dispatch = useDispatch()
  const { billAmount, peopleAmount, tipAmount, totalAmount } = useSelector((state: RootState) => state.tipCalculatorApp)
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

  const errorString = "Can't be zero"

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
                    onChange={(e) => handleNewBillAmount(e)}
                  />
                </form>
              </InputContainer>
            </ItemContainer>
            <ItemContainer>
              <ItemHeader>Select Tip %</ItemHeader>
              <TipGridBox>
                <TipGridItem
                  onClick={() => {
                    dispatch(setBillAmount(newBillAmount))
                    dispatch(setPeopleAmount(newPeopleAmount))
                    dispatch(setTipAmount(5))
                    dispatch(setTotalAmount())
                  }}
                >
                  5%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(setBillAmount(newBillAmount))
                    dispatch(setPeopleAmount(newPeopleAmount))
                    dispatch(setTipAmount(10))
                    dispatch(setTotalAmount())
                  }}
                >
                  10%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(setBillAmount(newBillAmount))
                    dispatch(setPeopleAmount(newPeopleAmount))
                    dispatch(setTipAmount(15))
                    dispatch(setTotalAmount())
                  }}
                >
                  15%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(setBillAmount(newBillAmount))
                    dispatch(setPeopleAmount(newPeopleAmount))
                    dispatch(setTipAmount(25))
                    dispatch(setTotalAmount())
                  }}
                >
                  25%
                </TipGridItem>
                <TipGridItem
                  onClick={() => {
                    dispatch(setBillAmount(newBillAmount))
                    dispatch(setPeopleAmount(newPeopleAmount))
                    dispatch(setTipAmount(50))
                  }}
                >
                  50%
                </TipGridItem>
                <form>
                  <InputCustomAmountField
                    value={customAmount === 0 ? '' : customAmount}
                    type="number"
                    placeholder="Custom"
                    onChange={(e) => handleSetCustomAmount(e)}
                    onBlur={() => {
                      dispatch(setBillAmount(newBillAmount))
                      dispatch(setPeopleAmount(newPeopleAmount))
                      dispatch(setTipAmount(customAmount))
                      dispatch(setTotalAmount())
                    }}
                  />
                </form>
              </TipGridBox>
            </ItemContainer>
            <ItemContainer>
              <ItemHeaderContainer>
                <ItemHeader>Number of people</ItemHeader>
                {newPeopleAmount <= 0 && <Warning>{errorString}</Warning>}
              </ItemHeaderContainer>
              <InputPeopleContainer peopleAmount={newPeopleAmount}>
                <InputIcon src={PersonIcon} alt="dollar sign"></InputIcon>
                <form>
                  <InputField
                    value={newPeopleAmount}
                    type="number"
                    placeholder={peopleAmount.toString()}
                    onChange={(e) => handleNewPeopleAmount(e)}
                  />
                </form>
              </InputPeopleContainer>
            </ItemContainer>
          </InteractionContainer>
          <ResultContainer>
            <NumbersContainer>
              <AmountContainer>
                <AmountTypeContainer>
                  <AmountHeader>Tip Amount</AmountHeader>
                  <PerHeader>/ person</PerHeader>
                </AmountTypeContainer>
                <Amount>{'$' + tipAmount.toFixed(2)}</Amount>
              </AmountContainer>
              <AmountContainer>
                <AmountTypeContainer>
                  <AmountHeader>Total</AmountHeader>
                  <PerHeader>/ person</PerHeader>
                </AmountTypeContainer>
                <Amount>{'$' + totalAmount.toFixed(2)}</Amount>
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
