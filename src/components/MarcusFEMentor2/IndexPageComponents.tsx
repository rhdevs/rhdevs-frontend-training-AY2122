import React from 'react'
import {
  BarLink,
  ContactBtnDiv,
  ContactBtnText,
  HeaderBarLinksStyled,
  MyTeamLogoStyled,
} from './styles/IndexPageComponents.styled'

export const MyTeamLogo = ({ top }: { top?: string }) => {
  return <MyTeamLogoStyled top={top}>myteam</MyTeamLogoStyled>
}

export const HeaderBarLinks = ({ left, top, responsive }: { left?: string; top?: string; responsive?: boolean }) => {
  return (
    <HeaderBarLinksStyled left={left} top={top} responsive={responsive}>
      <BarLink>home</BarLink>
      <BarLink>about</BarLink>
    </HeaderBarLinksStyled>
  )
}

export const ContactButton = ({ color }: { color: 'light' | 'dark' }) => {
  return (
    <ContactBtnDiv color={color}>
      <ContactBtnText>contact us</ContactBtnText>
    </ContactBtnDiv>
  )
}
