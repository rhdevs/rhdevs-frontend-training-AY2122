import React from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import {
  BarLink,
  ContactBtnDiv,
  ContactBtnText,
  HeaderBarLinksStyled,
  MyTeamLogoStyled,
} from './styles/MainPageComponents.styled'

export const MyTeamLogo = ({ top }: { top?: string }) => {
  return <MyTeamLogoStyled top={top}>myteam</MyTeamLogoStyled>
}

export const HeaderBarLinks = ({ left, top, responsive }: { left?: string; top?: string; responsive?: boolean }) => {
  const history = useHistory()
  return (
    <HeaderBarLinksStyled left={left} top={top} responsive={responsive}>
      <BarLink onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_HOME)}>home</BarLink>
      <BarLink onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_ABOUT)}>about</BarLink>
    </HeaderBarLinksStyled>
  )
}

export const ContactButton = ({ color }: { color: 'light' | 'dark' }) => {
  const history = useHistory()
  return (
    <ContactBtnDiv color={color} onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_CONTACT)}>
      <ContactBtnText>contact us</ContactBtnText>
    </ContactBtnDiv>
  )
}
