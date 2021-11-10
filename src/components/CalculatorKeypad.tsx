import React, { useState } from 'react'
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
  textColor: string
}

const ColorList: Colors[] = [
  {
    ScreenBackground: 'hsl(224, 36%, 15%)',
    KeypadBackground: 'hsl(223, 31%, 20%)',
    textColor: 'white',
  },
  {
    ScreenBackground: 'hsl(0, 0%, 93%)',
    KeypadBackground: 'hsl(0, 5%, 81%)',
    textColor: 'hsl(60, 10%, 19%)',
  },
  {
    ScreenBackground: 'hsl(268, 71%, 12%)',
    KeypadBackground: 'hsl(268, 71%, 12%)',
    textColor: 'hsl(52, 100%, 62%)',
  },
]

const CalculatorKeypad = (props: Props) => {
  const TypeNumber = (number: string) => {
    if (operator === '') {
      if (number === '.') {
        if (decimal1 === false) {
          setDecimal1(true)
          setNumber1(number1 + number)
        }
      } else {
        setNumber1(number1 + number)
      }
    } else {
      if (number === '.') {
        if (decimal2 === false) {
          setDecimal2(true)
          setNumber2(number2 + number)
        }
      } else {
        setNumber2(number2 + number)
      }
    }
  }

  const TypeOperator = (operator: string) => {
    if (number1 !== '') {
      if (number2 === '') {
        setOperator(operator)
      } else {
        ExecuteCalc(operator)
      }
    }
  }

  const ExecuteCalc = (newOperator: string) => {
    let number: number
    if (operator === '+') {
      number = parseFloat(number1) + parseFloat(number2)
    } else if (operator === '/') {
      number = parseFloat(number1) / parseFloat(number2)
    } else if (operator === '*') {
      number = parseFloat(number1) * parseFloat(number2)
    } else if (operator === '-') {
      number = parseFloat(number1) - parseFloat(number2)
    } else {
      number = parseFloat(number1)
    }
    if (number - Math.floor(number) > 0) {
      setNumber1(number.toFixed(3).toString())
    } else {
      setNumber1(number.toFixed(0).toString())
    }
    setOperator(newOperator)
    setNumber2('')
    setDecimal2(false)
  }
  const ClearScreen = () => {
    setNumber1('')
    setNumber2('')
    setOperator('')
    setDecimal1(false)
    setDecimal2(false)
  }
  const Delete = () => {
    if (number2 !== '') {
      if (number2.slice(-1) === '.') {
        setDecimal2(false)
      }
      setNumber2(number2.slice(0, -1))
    } else if (operator !== '') {
      setOperator('')
    } else if (number1 === 'Infinity' || number1 === '-Infinity' || number1 === 'NaN') {
      ClearScreen()
    } else {
      if (number1.slice(-1) === '.') {
        setDecimal1(false)
      }
      setNumber1(number1.slice(0, -1))
    }
  }
  const [number1, setNumber1] = useState<string>('')
  const [number2, setNumber2] = useState<string>('')
  const [operator, setOperator] = useState<string>('')
  const [decimal1, setDecimal1] = useState<boolean>(false)
  const [decimal2, setDecimal2] = useState<boolean>(false)

  return (
    <MainContainer>
      <NumberContainer backgroundColor={ColorList[props.colorScheme].ScreenBackground}>
        <DisplayNumber textColor={ColorList[props.colorScheme].textColor}>
          {number1 + ' ' + operator + ' ' + number2}
        </DisplayNumber>
      </NumberContainer>
      <CalcContainer backgroundColor={ColorList[props.colorScheme].KeypadBackground}>
        <NewContainer>
          <div onClick={() => TypeNumber('1')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={1}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('2')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={2}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('3')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={3}></CalculatorButton>
          </div>
          <div onClick={() => Delete()}>
            <CalculatorButton colorScheme={props.colorScheme} isRemoval={true} value={'DEL'}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('4')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={4}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('5')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={5}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('6')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={6}></CalculatorButton>
          </div>
          <div onClick={() => TypeOperator('+')}>
            <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'+'}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('7')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={7}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('8')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={8}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('9')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={9}></CalculatorButton>
          </div>
          <div onClick={() => TypeOperator('-')}>
            <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'-'}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('.')}>
            <CalculatorButton colorScheme={props.colorScheme} isDecimal={true} value={'.'}></CalculatorButton>
          </div>
          <div onClick={() => TypeNumber('0')}>
            <CalculatorButton colorScheme={props.colorScheme} isNumber={true} value={0}></CalculatorButton>
          </div>
          <div onClick={() => TypeOperator('*')}>
            <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'*'}></CalculatorButton>
          </div>
          <div onClick={() => TypeOperator('/')}>
            <CalculatorButton colorScheme={props.colorScheme} isOperator={true} value={'/'}></CalculatorButton>
          </div>
          <DoubleSize>
            <div onClick={() => ClearScreen()}>
              <CalculatorButton colorScheme={props.colorScheme} isRemoval={true} value="Clear"></CalculatorButton>
            </div>
          </DoubleSize>
          <DoubleSize2>
            <div onClick={() => ExecuteCalc('')}>
              <CalculatorButton colorScheme={props.colorScheme} isEqual={true} value={'='}></CalculatorButton>
            </div>
          </DoubleSize2>
        </NewContainer>
      </CalcContainer>
    </MainContainer>
  )
}

export default CalculatorKeypad
