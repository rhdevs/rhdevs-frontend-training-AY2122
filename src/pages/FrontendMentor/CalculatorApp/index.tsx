import React, { useState } from 'react'
import {
  MainContainer,
  TopContainer,
  ButtonContainer,
  Button,
  Textbox,
  Containers,
} from './styles/CalculatorApp.styled'
import CalculatorKeypad from '../../../components/CalculatorKeypad'

type Colors = {
  MainBackground: string
  KeypadBackground: string
  ButtonBackground: string
  SliderBackground: string
  TextColor: string
}

const ColorList: Colors[] = [
  {
    MainBackground: 'hsl(222, 26%, 31%)',
    KeypadBackground: 'hsl(223, 31%, 20%)',
    ButtonBackground: 'hsl(6, 63%, 50%)',
    SliderBackground: 'hsl(223, 31%, 20%)',
    TextColor: 'white',
  },
  {
    MainBackground: 'hsl(0, 0%, 90%)',
    KeypadBackground: 'hsl(0, 5%, 81%)',
    ButtonBackground: 'hsl(25, 98%, 40%)',
    SliderBackground: 'hsl(0, 5%, 81%)',
    TextColor: 'hsl(60, 10%, 19%)',
  },
  {
    MainBackground: 'hsl(268, 75%, 9%)',
    KeypadBackground: 'hsl(268, 71%, 12%)',
    ButtonBackground: 'hsl(176, 100%, 44%)',
    SliderBackground: 'hsl(268, 71%, 12%)',
    TextColor: 'hsl(52, 100%, 62%)',
  },
]
const CalculatorApp = () => {
  const [colorScheme, setColorScheme] = useState<number>(0)
  const [Button1, setButton1] = useState<boolean>(true)
  const [Button2, setButton2] = useState<boolean>(false)
  const [Button3, setButton3] = useState<boolean>(false)

  const ClickButton = (button_clicked: number) => {
    if (button_clicked === 1) {
      setButton1(true)
      setButton2(false)
      setButton3(false)
      setColorScheme(0)
    } else if (button_clicked === 2) {
      setButton1(false)
      setButton2(true)
      setButton3(false)
      setColorScheme(1)
    } else {
      setButton1(false)
      setButton2(false)
      setButton3(true)
      setColorScheme(2)
    }
  }

  return (
    <MainContainer backgroundColor={ColorList[colorScheme].MainBackground}>
      <TopContainer backgroundColor={ColorList[colorScheme].MainBackground}></TopContainer>
      <Containers width={46.5}>
        <Textbox TextColor={ColorList[colorScheme].TextColor}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Textbox>
      </Containers>
      <Containers width={48}>
        <Textbox TextColor={ColorList[colorScheme].TextColor}> THEME </Textbox>
        <ButtonContainer backgroundColor={ColorList[colorScheme].SliderBackground}>
          <div onClick={() => ClickButton(1)}>
            <Button
              clicked={Button1}
              backgroundColorClicked={ColorList[colorScheme].ButtonBackground}
              backgroundColorNotClicked={ColorList[colorScheme].SliderBackground}
            ></Button>
          </div>
          <div onClick={() => ClickButton(2)}>
            <Button
              clicked={Button2}
              backgroundColorClicked={ColorList[colorScheme].ButtonBackground}
              backgroundColorNotClicked={ColorList[colorScheme].SliderBackground}
            ></Button>
          </div>
          <div onClick={() => ClickButton(3)}>
            <Button
              clicked={Button3}
              backgroundColorClicked={ColorList[colorScheme].ButtonBackground}
              backgroundColorNotClicked={ColorList[colorScheme].SliderBackground}
            ></Button>
          </div>
        </ButtonContainer>
      </Containers>
      <CalculatorKeypad colorScheme={colorScheme}></CalculatorKeypad>
    </MainContainer>
  )
}

export default CalculatorApp
