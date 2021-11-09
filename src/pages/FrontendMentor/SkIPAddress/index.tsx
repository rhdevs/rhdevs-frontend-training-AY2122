import React, { ChangeEvent, useState } from 'react'
import Background from '../../../components/SkIPAddress/Background'
import ContentBox from '../../../components/SkIPAddress/ContentBox'
import {
  BoxSeparator,
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
  const [Info, setInfo] = useState('')

  const url = 'https://geo.ipify.org/api/v2/country?apiKey=at_StGwLfCoqwr9pCBTJ7lw0vOT5Xubd&ipAddress='
  const handleSubmit = () => {
    const newURL = url + Input
    console.log(newURL)
    fetch(newURL, {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp: any) => {
        if (!resp.ok) {
          if (resp.status >= 500) {
            throw new Error('Server Error')
          }
        }
        setInfo(resp.json())
        console.log(Info)
      })
      //   .then((data) => {
      //     dispatch({
      //       type: COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA,
      //       allCountries: data,
      //       responseOk: true,
      //     })
      //   })
      .catch((err) => alert(err))
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
        <DisplayContainer>
          <ContentBox header="IP ADDRESS" body="8.8.8.8" />
          <BoxSeparator />
          <ContentBox header="LOCATION" body="8.8.8.8" />
          <BoxSeparator />
          <ContentBox header="TIMEZONE" body="8.8.8.8" />
          <BoxSeparator />
          <ContentBox header="ISP" body="8.8.8.8" />
        </DisplayContainer>
      </MainContainer>
    </>
  )
}

export default SkIPAddress
