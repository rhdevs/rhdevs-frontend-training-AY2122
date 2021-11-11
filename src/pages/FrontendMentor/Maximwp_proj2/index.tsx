import { Switch } from 'antd'
import React, { useState } from 'react'
import { Cont } from '../../../components/MaximWPproj2/Containers'
import { CentCont } from '../../../components/MaximWPproj2/MainCont.styled'

import {
  MainContainer,
  MainBox,
  TopBox,
  Minibox,
  Pricing,
  ToggleBetween,
  SwitchStyle,
  SwitchStyle1,
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
              <SwitchStyle1 onChange={() => setMonthly(!monthly)}></SwitchStyle1>
              <ToggleBetween> Monthly </ToggleBetween>
            </Minibox>
          </div>
        </TopBox>
        <MainContainer>
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
        </MainContainer>
      </MainBox>
    </>
  )
}
