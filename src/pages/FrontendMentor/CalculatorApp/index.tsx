import React from 'react'
import { CalcContainer, MainContainer, NumberContainer, TopContainer } from './styles/CalculatorApp.styled'

const CalculatorApp = () => {
  return (
    <MainContainer>
      <TopContainer></TopContainer>
      <NumberContainer></NumberContainer>
      <CalcContainer></CalcContainer>
    </MainContainer>
  )
}

export default CalculatorApp
