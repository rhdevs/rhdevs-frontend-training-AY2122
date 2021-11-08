import React from 'react'
import CalculatorButton from './CalculatorButton'
import { DoubleSize, DoubleSize2, NewContainer } from './styles/CalculatorKeypad.styled'

type Props = {
  isNumber?: boolean
  isOperator?: boolean
  isRemoval?: boolean
  isEqual?: boolean
  isDecimal?: boolean
  number?: number
  operator?: string
  removal?: string
}

const CalculatorKeypad = (props: Props) => {
  return (
    <NewContainer>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <CalculatorButton></CalculatorButton>
      <DoubleSize>
        <CalculatorButton></CalculatorButton>
      </DoubleSize>
      <DoubleSize2>
        <CalculatorButton></CalculatorButton>
      </DoubleSize2>
    </NewContainer>
  )
}

export default CalculatorKeypad
