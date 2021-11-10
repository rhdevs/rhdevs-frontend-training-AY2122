import React, { useState } from 'react'
import { MainContainer, TopContainer } from './styles/CalculatorApp.styled'
import CalculatorKeypad from '../../../components/CalculatorKeypad'

type Colors = {
  MainBackground: string
  KeypadBackground: string
}

const ColorList: Colors[] = [
  {
    MainBackground: 'hsl(222, 26%, 31%)',
    KeypadBackground: 'hsl(223, 31%, 20%)',
  },
  {
    MainBackground: 'hsl(0, 0%, 90%)',
    KeypadBackground: 'hsl(0, 5%, 81%)',
  },
  {
    MainBackground: 'hsl(268, 75%, 9%)',
    KeypadBackground: 'hsl(268, 71%, 12%)',
  },
]
const CalculatorApp = () => {
  const [colorScheme, setColorScheme] = useState<number>(0)
  return (
    <MainContainer backgroundColor={ColorList[colorScheme].MainBackground}>
      <TopContainer backgroundColor={ColorList[colorScheme].MainBackground}></TopContainer>
      <CalculatorKeypad colorScheme={colorScheme}></CalculatorKeypad>
    </MainContainer>
  )
}

export default CalculatorApp
