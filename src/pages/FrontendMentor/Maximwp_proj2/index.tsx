import React, { useState } from 'react'
import { Container } from '../../../components/MaximWPproj2/Container'
import { CentCont } from '../../../components/MaximWPproj2/CentCont'

import {
  MainContainer,
  MainBox,
  TopBox,
  Minibox,
  Pricing,
  ToggleBetween,
  SwitchStyle1,
} from './styles/Maximwpproject2.styled'

export default function PricingApp() {
  const [monthly, setMonthly] = useState(false)

  return (
    <MainBox>
      <TopBox>
        <Pricing> Our Pricing </Pricing>
        <Minibox>
          <ToggleBetween> Annually </ToggleBetween>
          <SwitchStyle1 onChange={() => setMonthly(!monthly)}></SwitchStyle1>
          <ToggleBetween> Monthly </ToggleBetween>
        </Minibox>
      </TopBox>
      <MainContainer>
        <Container
          title="Basic"
          number={monthly ? '$19.99' : '$199.99'}
          text1="500 GB Storage"
          text2={'2 Users Allowed'}
          text3={'Send up to 3 GB'}
        ></Container>
        <CentCont
          title="Professional"
          number={monthly ? '$24.99' : '$249.99'}
          text1="1 TB Storage"
          text2={'5 Users Allowed'}
          text3={'Send up to 10 GB'}
        ></CentCont>
        <Container
          title="Master"
          number={monthly ? '$39.99' : '$359.99'}
          text1={'2 TB Storage'}
          text2={'10 Users Allowed'}
          text3={'Send up to 20 GB'}
        ></Container>
      </MainContainer>
    </MainBox>
  )
}
