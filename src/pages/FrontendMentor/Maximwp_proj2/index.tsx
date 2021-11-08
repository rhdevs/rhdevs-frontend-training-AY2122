import { Button, Switch } from 'antd'
import React, { useState, useCallback } from 'react'
import {
  MainContainer,
  TopBox,
  Minibox,
  SideCont,
  CentreCont,
  StyledHeader,
  Pricing,
  StyledNumber,
  ToggleBetween,
  Detailsincont,
} from './styles/styled'

export default function App() {
  const [monthly, setMonthly] = useState(false)

  return (
    <>
      <TopBox>
        <div className="App">
          <Pricing> Our Pricing </Pricing>
          <Minibox>
            <ToggleBetween> Annually </ToggleBetween>
            <Switch onChange={() => setMonthly(!monthly)}></Switch>
            <ToggleBetween> Monthly </ToggleBetween>
          </Minibox>
        </div>
      </TopBox>
      <MainContainer>
        <SideCont>
          <StyledHeader>Basic</StyledHeader>
          {monthly ? <StyledNumber> $19.99 </StyledNumber> : <StyledNumber> $199.99 </StyledNumber>}
          <Detailsincont>500 GB Storage</Detailsincont>
          <Detailsincont>2 Users Allowed</Detailsincont>
          <Detailsincont>Send up to 3 GB</Detailsincont>
        </SideCont>
        <CentreCont>
          <StyledHeader>Professional</StyledHeader>
          {monthly ? <StyledNumber> $24.99 </StyledNumber> : <StyledNumber> $249.99 </StyledNumber>}
          <Detailsincont>1 TB Storage</Detailsincont>
          <Detailsincont>5 Users Allowed</Detailsincont>
          <Detailsincont>Send up to 10 GB</Detailsincont>
        </CentreCont>
        <SideCont>
          <StyledHeader>Master</StyledHeader>
          {monthly ? <StyledNumber> $39.99 </StyledNumber> : <StyledNumber> $359.99 </StyledNumber>}
          <Detailsincont>2 TB Storage</Detailsincont>
          <Detailsincont>10 Users Allowed</Detailsincont>
          <Detailsincont>Send up to 20 GB</Detailsincont>
        </SideCont>
      </MainContainer>
    </>
  )
}
