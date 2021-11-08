import React from 'react'
import CalculatorButton from './CalculatorButton'
import { DoubleSize, DoubleSize2, NewContainer } from './styles/CalculatorKeypad.styled'

type Props = {
  colorScheme: number
}
const CalculatorKeypad = (props: Props) => {
  return (
    <NewContainer>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={1}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={2}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={3}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isRemoval={true} value={'DEL'}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={4}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={5}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={6}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'+'}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={7}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={8}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={9}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'-'}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isDecimal={true} value={'.'}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={0}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'*'}></CalculatorButton>
      <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'/'}></CalculatorButton>
      <DoubleSize>
        <CalculatorButton colorScheme={props.colorScheme} isRemoval={true} value="Clear"></CalculatorButton>
      </DoubleSize>
      <DoubleSize2>
        <CalculatorButton colorScheme={props.colorScheme} isEqual={true} value={'='}></CalculatorButton>
      </DoubleSize2>
    </NewContainer>
  )
}

export default CalculatorKeypad
