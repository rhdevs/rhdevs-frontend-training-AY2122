import React, { useState } from 'react'
import {
  MainContainer,
  ButtonContainer,
  Button,
  Textbox,
  Containers,
  TopRightContainer,
  TopLeftContainer,
} from './styles/CalculatorApp.styled'
import { ColorList } from './styles/Themes'
import CalculatorKeypad from '../../../components/CalculatorKeypad'

const CalculatorApp = () => {
  const [colorScheme, setColorScheme] = useState<number>(0)
  const [button1, setButton1] = useState<boolean>(true)
  const [button2, setButton2] = useState<boolean>(false)
  const [button3, setButton3] = useState<boolean>(false)

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
      <Containers>
        <Textbox TextColor={ColorList[colorScheme].TextColor}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Textbox>
      </Containers>
      <Containers>
        <TopLeftContainer TextColor={ColorList[colorScheme].TextColor}>Calc</TopLeftContainer>
        <TopRightContainer>
          <Textbox TextColor={ColorList[colorScheme].TextColor} width={'5vh'}>
            THEME
          </Textbox>
          <ButtonContainer backgroundColor={ColorList[colorScheme].SliderBackground}>
            <div onClick={() => ClickButton(1)}>
              <Button
                clicked={button1}
                backgroundColorClicked={ColorList[colorScheme].ButtonBackground}
                backgroundColorNotClicked={ColorList[colorScheme].SliderBackground}
              ></Button>
            </div>
            <div onClick={() => ClickButton(2)}>
              <Button
                clicked={button2}
                backgroundColorClicked={ColorList[colorScheme].ButtonBackground}
                backgroundColorNotClicked={ColorList[colorScheme].SliderBackground}
              ></Button>
            </div>
            <div onClick={() => ClickButton(3)}>
              <Button
                clicked={button3}
                backgroundColorClicked={ColorList[colorScheme].ButtonBackground}
                backgroundColorNotClicked={ColorList[colorScheme].SliderBackground}
              ></Button>
            </div>
          </ButtonContainer>
        </TopRightContainer>
      </Containers>

      <CalculatorKeypad colorScheme={colorScheme}></CalculatorKeypad>
    </MainContainer>
  )
}

export default CalculatorApp
