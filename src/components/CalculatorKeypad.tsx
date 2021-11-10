import React from 'react'
import CalculatorButton from './CalculatorButton'
import {
  CalcContainer,
  DisplayNumber,
  DoubleSize,
  DoubleSize2,
  MainContainer,
  NewContainer,
  NumberContainer,
} from './styles/CalculatorKeypad.styled'

type Props = {
  colorScheme: number
}
type Colors = {
  ScreenBackground: string
  KeypadBackground: string
}

const ColorList: Colors[] = [
  {
    ScreenBackground: 'hsl(224, 36%, 15%)',
    KeypadBackground: 'hsl(223, 31%, 20%)',
  },
  {
    ScreenBackground: 'hsl(0, 0%, 93%)',
    KeypadBackground: 'hsl(0, 5%, 81%)',
  },
  {
    ScreenBackground: 'hsl(268, 71%, 12%)',
    KeypadBackground: 'hsl(268, 71%, 12%)',
  },
]
const CalculatorKeypad = (props: Props) => {
  return (
    <MainContainer>
      <NumberContainer backgroundColor={ColorList[props.colorScheme].ScreenBackground}>
        <DisplayNumber>35431</DisplayNumber>
      </NumberContainer>
      <CalcContainer backgroundColor={ColorList[props.colorScheme].KeypadBackground}>
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
      </CalcContainer>
    </MainContainer>
  )
}

export default CalculatorKeypad
