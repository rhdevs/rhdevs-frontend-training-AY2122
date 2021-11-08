import React from 'react'
import CalculatorButton from './CalculatorButton'
import { DoubleSize, DoubleSize2, NewContainer } from './styles/CalculatorKeypad.styled'

type Props = {
  colorScheme: number
}
const CalculatorKeypad = (props: Props) => {
  return (
    <NewContainer>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isRemoval={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isDecimal={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true}></CalculatorButton>
      <DoubleSize>
        <CalculatorButton colorScheme={props.colorScheme} isRemoval={true}></CalculatorButton>
      </DoubleSize>
      <DoubleSize2>
        <CalculatorButton colorScheme={props.colorScheme} isEqual={true}></CalculatorButton>
      </DoubleSize2>
    </NewContainer>
  )
}

export default CalculatorKeypad
