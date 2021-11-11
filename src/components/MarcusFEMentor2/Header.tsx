import React from 'react'

import { ContactButton, HeaderBarLinks, MyTeamLogo } from './GlobalComponents'
import { HeaderBarStyled, HeaderBarTextDiv } from './styles/GlobalComponents.styled'

const HeaderBar = () => {
  return (
    <HeaderBarStyled>
      <HeaderBarTextDiv>
        <MyTeamLogo />
        <HeaderBarLinks left="17vw" top="6px" responsive={true} />
      </HeaderBarTextDiv>
      <ContactButton color="light" />
    </HeaderBarStyled>
  )
}

export default HeaderBar
