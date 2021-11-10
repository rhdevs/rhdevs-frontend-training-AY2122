import React from 'react'

import { ContactButton, HeaderBarLinks, MyTeamLogo } from './IndexPageComponents'
import { HeaderBarStyled, HeaderBarTextDiv } from './styles/Page1MainComponents.styled'

export const HeaderBar = () => {
  return (
    <HeaderBarStyled>
      <HeaderBarTextDiv>
        <MyTeamLogo />
        <HeaderBarLinks left="17vw" top="12px" responsive={true} />
      </HeaderBarTextDiv>
      <ContactButton color="light" />
    </HeaderBarStyled>
  )
}
