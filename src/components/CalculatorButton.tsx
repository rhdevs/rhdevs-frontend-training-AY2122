import { PropertySafetyFilled } from '@ant-design/icons'
import React from 'react'
import CalculatorKeypad from './CalculatorKeypad'
import { MainContainer, ButtonNumber } from './styles/CalculatorButton.styled'

type Props = {
  isNumber?: boolean | false
  isOperator?: boolean | false
  isRemoval?: boolean | false
  isEqual?: boolean | false
  isDecimal?: boolean | false
  colorScheme: number
  value?: number | string
  // number?: number
  // operator?: string
  // removal?: string
}

type Colors = {
  BaseKeyBackground: string
  BaseKeyShadow: string
  RemovalKeyBackground: string
  RemovalKeyShadow: string
  EqualKeyBackground: string
  EqualKeyShadow: string
  DarkText: string
  LightText: string
  SpecialText?: string
}

const ColorList: Colors[] = [
  {
    BaseKeyBackground: 'hsl(30, 25%, 89%)',
    BaseKeyShadow: 'hsl(28, 16%, 65%)',
    RemovalKeyBackground: 'hsl(225, 21%, 49%)',
    RemovalKeyShadow: 'hsl(224, 28%, 35%)',
    EqualKeyBackground: 'hsl(6, 63%, 50%)',
    EqualKeyShadow: 'hsl(6, 70%, 34%)',
    DarkText: 'hsl(221, 14%, 31%)',
    LightText: 'hsl(0, 0, 100%)',
  },
  {
    BaseKeyBackground: 'hsl(45, 7%, 89%)',
    BaseKeyShadow: 'hsl(35, 11%, 61%)',
    RemovalKeyBackground: 'hsl(185, 42%, 37%)',
    RemovalKeyShadow: 'hsl(185, 58%, 25%)',
    EqualKeyBackground: 'hsl(25, 98%, 40%)',
    EqualKeyShadow: 'hsl(25, 99%, 27%)',
    DarkText: 'hsl(60, 10%, 19%)',
    LightText: 'hsl(0, 0, 100%)',
  },
  {
    BaseKeyBackground: 'hsl(268, 47%, 21%)',
    BaseKeyShadow: 'hsl(290, 70%, 36%)',
    RemovalKeyBackground: 'hsl(281, 89%, 26%)',
    RemovalKeyShadow: 'hsl(285, 91%, 52%)',
    EqualKeyBackground: 'hsl(176, 100%, 44%)',
    EqualKeyShadow: 'hsl(177, 92%, 70%)',
    DarkText: 'hsl(198, 20%, 13%)',
    LightText: 'hsl(0, 0, 100%)',
    SpecialText: 'hsl(52, 100%, 62%)',
  },
]

function test() {
  console.log('hi there')
}

const CalculatorButton = (props: Props) => {
  return (
    <>
      {props.isNumber || props.isDecimal || props.isOperator ? (
        <MainContainer
          backgroundColor={ColorList[props.colorScheme].BaseKeyBackground}
          backgroundShadow={ColorList[props.colorScheme].BaseKeyShadow}
        >
          <ButtonNumber onClick={test}>{props.value}</ButtonNumber>
        </MainContainer>
      ) : props.isRemoval ? (
        <MainContainer
          backgroundColor={ColorList[props.colorScheme].RemovalKeyBackground}
          backgroundShadow={ColorList[props.colorScheme].RemovalKeyShadow}
        >
          <ButtonNumber>{props.value}</ButtonNumber>
        </MainContainer>
      ) : props.isEqual ? (
        <MainContainer
          backgroundColor={ColorList[props.colorScheme].EqualKeyBackground}
          backgroundShadow={ColorList[props.colorScheme].EqualKeyShadow}
        >
          <ButtonNumber>{props.value}</ButtonNumber>
        </MainContainer>
      ) : (
        console.log('no button')
      )}
    </>
  )
}

export default CalculatorButton
