import React from 'react'

import { ContactButton, HeaderBarLinks, MyTeamLogo } from './GlobalComponents'
import {
  FooterAddressStyled,
  FooterCopyrightStyled,
  FooterDiv,
  FooterLeftLogoBg,
  FooterLowerContentDiv,
  FooterLowerLeftStyled,
  FooterLowerRightStyled,
  FooterSocialMediaDiv,
  FooterSocialMediaIconStyled,
  FooterUpperContentDiv,
  FooterUpperTextStyled,
  LowerFooterBg,
  UpperFooterBg,
} from './styles/Footers.styled'

import fbIcon from '../../assets/MarcusFEMentor2/icon-facebook.svg'
import pinsIcon from '../../assets/MarcusFEMentor2/icon-pinterest.svg'
import twtrIcon from '../../assets/MarcusFEMentor2/icon-twitter.svg'
import FooterLeftLogo from '../../assets/MarcusFEMentor2/bg-pattern-home-6-about-5.svg'

const FooterUpperContent = () => {
  return (
    <FooterUpperContentDiv>
      <FooterUpperTextStyled>Ready to get started?</FooterUpperTextStyled>
      <ContactButton color="dark" />
    </FooterUpperContentDiv>
  )
}

const FooterLowerContent = () => {
  return (
    <FooterLowerContentDiv>
      <FooterLowerLeft />
      <FooterAddress />
      <FooterLowerRight />
    </FooterLowerContentDiv>
  )
}

const FooterLowerLeft = () => {
  return (
    <FooterLowerLeftStyled>
      <MyTeamLogo />
      <HeaderBarLinks left="0" top="65px" />
    </FooterLowerLeftStyled>
  )
}

const FooterAddress = () => {
  return (
    <FooterAddressStyled>
      987 Hillcrest Lane
      <br /> Irvine, CA
      <br /> California 92714
      <br /> Call Us : 949-833-7432
    </FooterAddressStyled>
  )
}

const FooterSocialMediaIcons = () => {
  return (
    <FooterSocialMediaDiv>
      <FooterSocialMediaIconStyled src={fbIcon} />
      <FooterSocialMediaIconStyled src={pinsIcon} />
      <FooterSocialMediaIconStyled src={twtrIcon} />
    </FooterSocialMediaDiv>
  )
}

const FooterLowerRight = () => {
  return (
    <FooterLowerRightStyled>
      <FooterSocialMediaIcons />
      <FooterCopyrightStyled>Copyright 2020. All Rights Reserved</FooterCopyrightStyled>
    </FooterLowerRightStyled>
  )
}

const UpperFooter = () => {
  return (
    <>
      <UpperFooterBg>
        <FooterLeftLogoBg src={FooterLeftLogo} />
        <FooterUpperContent />
      </UpperFooterBg>
    </>
  )
}

const LowerFooter = () => {
  return (
    <LowerFooterBg>
      <FooterLowerContent />
    </LowerFooterBg>
  )
}

export default function Footer({ type = 'full' }: { type?: 'full' | 'half' }) {
  return (
    <FooterDiv>
      {type === 'full' && <UpperFooter />}
      <LowerFooter />
    </FooterDiv>
  )
}
