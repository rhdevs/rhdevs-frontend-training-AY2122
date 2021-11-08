import React, { useState } from 'react'
import {
  CalcContainer,
  DisplayNumber,
  MainContainer,
  NumberContainer,
  TopContainer,
} from './styles/CalculatorApp.styled'
import CalculatorKeypad from '../../../components/CalculatorKeypad'

type Colors = {
  MainBackground: string
  KeypadBackground: string
  ScreenBackground: string
}

const ColorList: Colors[] = [
  {
    MainBackground: 'hsl(222, 26%, 31%)',
    KeypadBackground: 'hsl(223, 31%, 20%)',
    ScreenBackground: 'hsl(224, 36%, 15%)',
  },
  {
    MainBackground: 'hsl(0, 0%, 90%)',
    KeypadBackground: 'hsl(0, 5%, 81%)',
    ScreenBackground: 'hsl(0, 0%, 93%)',
  },
  {
    MainBackground: 'hsl(268, 75%, 9%)',
    KeypadBackground: 'hsl(268, 71%, 12%)',
    ScreenBackground: 'hsl(268, 71%, 12%)',
  },
]
const CalculatorApp = () => {
  const [colorScheme, setColorScheme] = useState<number>(1)
  return (
    <MainContainer backgroundColor={ColorList[colorScheme].MainBackground}>
      <TopContainer backgroundColor={ColorList[colorScheme].MainBackground}></TopContainer>
      <NumberContainer backgroundColor={ColorList[colorScheme].ScreenBackground}>
        <DisplayNumber>35431</DisplayNumber>
      </NumberContainer>
      <CalcContainer backgroundColor={ColorList[colorScheme].KeypadBackground}>
        <CalculatorKeypad colorScheme={colorScheme}></CalculatorKeypad>
      </CalcContainer>
    </MainContainer>
  )
}

export default CalculatorApp
