import React, { useEffect, useState } from 'react'

import ContactButton from './ContactButton'
import HeaderBarLinks from './HeaderBarLinks'
import MyTeamLogo from './MyTeamLogo'
import {
  mobileMaxWidthValue,
  tabletMaxWidthValue,
} from '../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'
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
import footerLeftLogo from '../../assets/MarcusFEMentor2/bg-pattern-home-6-about-5.svg'

const FooterUpperContent = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FooterUpperContentDiv>
      <FooterUpperTextStyled>Ready to get started?</FooterUpperTextStyled>
      <ContactButton color="dark" margin={width > mobileMaxWidthValue ? '0 0 0 auto' : '70px auto 0'} />
    </FooterUpperContentDiv>
  )
}

const FooterLowerContent = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width > tabletMaxWidthValue) {
    return (
      // desktop display
      <FooterLowerContentDiv>
        <FooterLowerLeft />
        <FooterAddress />
        <FooterLowerRight />
      </FooterLowerContentDiv>
    )
  } else if (width > mobileMaxWidthValue) {
    return (
      // Tablet Display
      <FooterLowerContentDiv>
        <FooterTabletLeft />
        <FooterTabletRight />
      </FooterLowerContentDiv>
    )
  } else {
    return (
      // Mobile Display
      <FooterLowerContentDiv>
        <MyTeamLogo />
        <HeaderBarLinks />
        <FooterAddress />
        <FooterSocialMediaIcons />
        <FooterCopyright />
      </FooterLowerContentDiv>
    )
  }
}

const FooterTabletLeft = () => {
  return (
    <FooterLowerLeftStyled>
      <MyTeamLogo />
      <HeaderBarLinks margin="53px 0 0" />
      <FooterSocialMediaIcons />
    </FooterLowerLeftStyled>
  )
}

const FooterTabletRight = () => {
  return (
    <FooterLowerRightStyled>
      <FooterAddress />
      <FooterCopyright />
    </FooterLowerRightStyled>
  )
}

const FooterLowerLeft = () => {
  return (
    <FooterLowerLeftStyled>
      <MyTeamLogo />
      <HeaderBarLinks margin="25px 0 0" />
    </FooterLowerLeftStyled>
  )
}

const FooterLowerRight = () => {
  return (
    <FooterLowerRightStyled>
      <FooterSocialMediaIcons />
      <FooterCopyright />
    </FooterLowerRightStyled>
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

const FooterCopyright = () => {
  return <FooterCopyrightStyled>Copyright 2020. All Rights Reserved</FooterCopyrightStyled>
}

const UpperFooter = () => {
  return (
    <UpperFooterBg>
      <FooterLeftLogoBg src={footerLeftLogo} />
      <FooterUpperContent />
    </UpperFooterBg>
  )
}

const LowerFooter = () => {
  return (
    <LowerFooterBg>
      <FooterLowerContent />
    </LowerFooterBg>
  )
}

const Footer = ({ type = 'full' }: { type?: 'full' | 'half' }) => {
  return (
    <FooterDiv>
      {type === 'full' && <UpperFooter />}
      <LowerFooter />
    </FooterDiv>
  )
}

export default Footer
