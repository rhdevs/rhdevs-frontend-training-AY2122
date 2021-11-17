import React from 'react'
import { MainContainerButton, ButtonNumber } from './styles/CalculatorButton.styled'
import { ColorList } from '../pages/FrontendMentor/CalculatorApp/styles/Themes'

type Props = {
  isNumber?: boolean
  isOperator?: boolean
  isRemoval?: boolean
  isEqual?: boolean
  isDecimal?: boolean
  colorScheme: number
  value?: number | string
}

const CalculatorButton = (props: Props) => {
  return (
    <>
      {props.isNumber || props.isDecimal || props.isOperator ? (
        <MainContainerButton
          backgroundColor={ColorList[props.colorScheme].BaseKeyBackground}
          backgroundShadow={ColorList[props.colorScheme].BaseKeyShadow}
        >
          <ButtonNumber textColor={ColorList[props.colorScheme].DarkText}>{props.value}</ButtonNumber>
        </MainContainerButton>
      ) : props.isRemoval ? (
        <MainContainerButton
          backgroundColor={ColorList[props.colorScheme].RemovalKeyBackground}
          backgroundShadow={ColorList[props.colorScheme].RemovalKeyShadow}
        >
          <ButtonNumber>{props.value}</ButtonNumber>
        </MainContainerButton>
      ) : (
        <MainContainerButton
          backgroundColor={ColorList[props.colorScheme].EqualKeyBackground}
          backgroundShadow={ColorList[props.colorScheme].EqualKeyShadow}
        >
          <ButtonNumber textColor={ColorList[props.colorScheme].SpecialText}>{props.value}</ButtonNumber>
        </MainContainerButton>
      )}
    </>
  )
}

export default CalculatorButton
