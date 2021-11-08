import { Button, Switch } from 'antd'
import React, { useState, useCallback } from 'react'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import {
  MainContainer,
  MainBox,
  TopBox,
  Minibox,
  SideCont,
  CentreCont,
  StyledHeader,
  Pricing,
  StyledNumber,
  ToggleBetween,
  Detailsincont,
  ButtonStyle,
  ButtonStyle2,
  SwitchStyle,
} from './styles/styled'

export default function App() {
  const [monthly, setMonthly] = useState(false)

  return (
    <>
      <MainBox>
        <TopBox>
          <div className="App">
            <Pricing> Our Pricing </Pricing>
            <Minibox>
              <ToggleBetween> Annually </ToggleBetween>
              <Switch style={SwitchStyle} onChange={() => setMonthly(!monthly)}></Switch>
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
            <Button style={ButtonStyle2}> Learn more </Button>
          </SideCont>
          <CentreCont>
            <StyledHeader typ={'Main'}>Professional</StyledHeader>
            {monthly ? (
              <StyledNumber typ={'Main'}> $24.99 </StyledNumber>
            ) : (
              <StyledNumber typ={'Main'}> $249.99 </StyledNumber>
            )}
            <Detailsincont typ={'Main'}>1 TB Storage</Detailsincont>
            <Detailsincont typ={'Main'}>5 Users Allowed</Detailsincont>
            <Detailsincont typ={'Main'}>Send up to 10 GB</Detailsincont>
            <Button style={ButtonStyle}> Learn more </Button>
          </CentreCont>
          <SideCont>
            <StyledHeader>Master</StyledHeader>
            {monthly ? <StyledNumber> $39.99 </StyledNumber> : <StyledNumber> $359.99 </StyledNumber>}
            <Detailsincont>2 TB Storage</Detailsincont>
            <Detailsincont>10 Users Allowed</Detailsincont>
            <Detailsincont>Send up to 20 GB</Detailsincont>
            <Button style={ButtonStyle2}> Learn more </Button>
          </SideCont>
        </MainContainer>
      </MainBox>
    </>
  )
}
