import { Button, Switch } from 'antd'
import React, { useState, useCallback } from 'react'
import { Cont } from '../../../components/MaximWPproj2/Containers'
import { CentCont } from '../../../components/MaximWPproj2/MainCont.styled'

import { MainContainer, MainBox, TopBox, Minibox, Pricing, ToggleBetween, SwitchStyle } from './styles/styled'

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
              <Switch size="default" style={SwitchStyle} onChange={() => setMonthly(!monthly)}></Switch>
              <ToggleBetween> Monthly </ToggleBetween>
            </Minibox>
          </div>
        </TopBox>
        <MainContainer>
<<<<<<< HEAD
          <Cont
            title="Basic"
            number={monthly ? '$19.99' : '$199.99'}
            text1="500 GB Storage"
            text2={'2 Users Allowed'}
            text3={'Send up to 3 GB'}
          ></Cont>
          <CentCont
            title="Professional"
            number={monthly ? '$24.99' : '$249.99'}
            text1="1 TB Storage"
            text2={'5 Users Allowed'}
            text3={'Send up to 10 GB'}
          ></CentCont>
          <Cont
            title="Master"
            number={monthly ? '$39.99' : '$359.99'}
            text1={'2 TB Storage'}
            text2={'10 Users Allowed'}
            text3={'Send up to 20 GB'}
          ></Cont>
=======
          <SideCont>
            <StyledHeader>Basic</StyledHeader>
            {monthly ? <StyledNumber> $19.99 </StyledNumber> : <StyledNumber> $199.99 </StyledNumber>}
            <Divider style={SideDivider} />
            <Detailsincont>500 GB Storage</Detailsincont>
            <Divider style={SideDivider} />
            <Detailsincont>2 Users Allowed</Detailsincont>
            <Divider style={SideDivider} />
            <Detailsincont>Send up to 3 GB</Detailsincont>
            <Divider style={SideDivider} />
            <Button style={ButtonStyle2}> LEARN MORE </Button>
          </SideCont>
          <CentreCont>
            <StyledHeader typ={'Main'}>Professional</StyledHeader>
            {monthly ? (
              <StyledNumber typ={'Main'}> $24.99 </StyledNumber>
            ) : (
              <StyledNumber typ={'Main'}> $249.99 </StyledNumber>
            )}
            <Divider style={CentreDivider} />
            <Detailsincont typ={'Main'}>1 TB Storage</Detailsincont>
            <Divider style={CentreDivider} />
            <Detailsincont typ={'Main'}>5 Users Allowed</Detailsincont>
            <Divider style={CentreDivider} />
            <Detailsincont typ={'Main'}>Send up to 10 GB</Detailsincont>
            <Divider style={CentreDivider} />
            <Button style={ButtonStyle}> LEARN MORE </Button>
          </CentreCont>
          <SideCont>
            <StyledHeader>Master</StyledHeader>
            {monthly ? <StyledNumber> $39.99 </StyledNumber> : <StyledNumber> $399.99 </StyledNumber>}
            <Divider style={SideDivider} />
            <Detailsincont>2 TB Storage</Detailsincont>
            <Divider style={SideDivider} />
            <Detailsincont>10 Users Allowed</Detailsincont>
            <Divider style={SideDivider} />
            <Detailsincont>Send up to 20 GB</Detailsincont>
            <Divider style={SideDivider} />
            <Button style={ButtonStyle2}> LEARN MORE </Button>
          </SideCont>
>>>>>>> bec8fc3bf75bb1a68a33c6bd6d643d9d4b384c3a
        </MainContainer>
      </MainBox>
    </>
  )
}
