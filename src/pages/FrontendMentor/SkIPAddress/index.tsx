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
// API Request at https://geo.ipify.org/api/v2/country?apiKey=at_StGwLfCoqwr9pCBTJ7lw0vOT5Xubd&ipAddress=8.8.8.8
const SkIPAddress = () => {
  const [Input, setInput] = useState('')

  const url = 'https://geo.ipify.org/api/v2/country?apiKey=at_StGwLfCoqwr9pCBTJ7lw0vOT5Xubd&ipAddress='
  const handleSubmit = () => {
    // const newURL = url + Input
    console.log(Input)
    // fetch(newURL, {
    //   method: 'GET',
    //   mode: 'cors',
    // })
    //   .then((resp) => {
    //     resp.json()
    //     console.log(resp)
    //   })
    //   //   .then((data) => {
    //   //     dispatch({
    //   //       type: COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA,
    //   //       allCountries: data,
    //   //       responseOk: true,
    //   //     })
    //   //   })
    //   .catch((err) => alert(err))
  }

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
          <StyledButton onClick={() => handleSubmit()}>{'>'}</StyledButton>
        </InputContainer>
        <DisplayContainer></DisplayContainer>
      </MainContainer>
    </>
  )
}

export default SkIPAddress
