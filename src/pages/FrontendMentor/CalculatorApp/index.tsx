import React from 'react'
import { CalcContainer, MainContainer, NumberContainer, TopContainer } from './styles/CalculatorApp.styled'
import CalculatorKeypad from '../../../components/CalculatorKeypad'
const CalculatorApp = () => {
  return (
    <MainContainer>
      <TopContainer></TopContainer>
      <NumberContainer></NumberContainer>
      <CalcContainer>
        <CalculatorKeypad></CalculatorKeypad>
      </CalcContainer>
    </MainContainer>
  )
}

export default CalculatorApp
