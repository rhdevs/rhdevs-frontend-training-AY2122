import React from 'react'
import CalculatorButton from './CalculatorButton'
import { DoubleSize, DoubleSize2, NewContainer } from './styles/CalculatorKeypad.styled'

const CalculatorKeypad = () => {
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
