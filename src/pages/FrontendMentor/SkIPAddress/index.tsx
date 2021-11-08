import React, { ChangeEvent, useState } from 'react'
import Background from '../../../components/SkIPAddress/Background'
import {
  DisplayContainer,
  InputContainer,
  MainContainer,
  StyledButton,
  StyledHeader,
  StyledInput,
} from './styles/SkIPAddress.styled'

const SkIPAddress = () => {
  const [Input, setInput] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <>
      <Background />
      <MainContainer>
        <StyledHeader>IP Address Tracker</StyledHeader>
        <InputContainer>
          <StyledInput value={Input} placeholder="Input IP Address" onChange={(e) => handleInputChange(e)} />
          <StyledButton>{'>'}</StyledButton>
        </InputContainer>
        <DisplayContainer></DisplayContainer>
      </MainContainer>
    </>
  )
}

export default SkIPAddress
