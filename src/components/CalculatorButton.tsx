import React from 'react'
import CalculatorKeypad from './CalculatorKeypad'
import { MainContainer } from './styles/CalculatorButton.styled'

type Props = {
  isNumber?: boolean | false
  isOperator?: boolean | false
  isRemoval?: boolean | false
  isEqual?: boolean | false
  isDecimal?: boolean | false
  colorScheme?: number | 1
  number?: number
  operator?: string
  removal?: string
}
const CalculatorButton = (props: Props) => {
  return (
    <>
      <MainContainer></MainContainer>
    </>
  )
}

export default CalculatorButton
