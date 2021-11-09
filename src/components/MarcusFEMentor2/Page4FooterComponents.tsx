import React from 'react'
import { ContactButton, HeaderBarLinks, MyTeamLogo } from './IndexPageComponents'

import {
  Page4AddressStyled,
  Page4CopyrightStyled,
  Page4LowerContentDiv,
  Page4LowerLeftStyled,
  Page4LowerRightStyled,
  Page4SocialMediaDiv,
  Page4SocialMediaIconStyled,
  Page4UpperContentDiv,
  Page4UpperTextStyled,
} from './styles/Page4FooterComponents.styled'

import fbIcon from '../../assets/MarcusFEMentor2/icon-facebook.svg'
import pinsIcon from '../../assets/MarcusFEMentor2/icon-pinterest.svg'
import twtrIcon from '../../assets/MarcusFEMentor2/icon-twitter.svg'

export const Page4UpperContent = () => {
  return (
    <Page4UpperContentDiv>
      <Page4UpperTextStyled>Ready to get started?</Page4UpperTextStyled>
      <ContactButton color="dark" />
    </Page4UpperContentDiv>
  )
}

export const Page4LowerContent = () => {
  return (
    <Page4LowerContentDiv>
      <Page4LowerLeft />
      <Page4Address />
      <Page4LowerRight />
    </Page4LowerContentDiv>
  )
}

export const Page4LowerLeft = () => {
  return (
    <Page4LowerLeftStyled>
      <MyTeamLogo />
      <HeaderBarLinks left="0" top="65px" />
    </Page4LowerLeftStyled>
  )
}

export const Page4Address = () => {
  return (
    <Page4AddressStyled>
      987 Hillcrest Lane
      <br /> Irvine, CA
      <br /> California 92714
      <br /> Call Us : 949-833-7432
    </Page4AddressStyled>
  )
}

export const Page4SocialMediaIcons = () => {
  return (
    <Page4SocialMediaDiv>
      <Page4SocialMediaIconStyled src={fbIcon} />
      <Page4SocialMediaIconStyled src={pinsIcon} />
      <Page4SocialMediaIconStyled src={twtrIcon} />
    </Page4SocialMediaDiv>
  )
}

export const Page4LowerRight = () => {
  return (
    <Page4LowerRightStyled>
      <Page4SocialMediaIcons />
      <Page4CopyrightStyled>Copyright 2020. All Rights Reserved</Page4CopyrightStyled>
    </Page4LowerRightStyled>
  )
}
