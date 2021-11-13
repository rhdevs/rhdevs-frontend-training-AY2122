import styled from 'styled-components'

import {
  darkGreen,
  lightCoral,
  sacramentoStateGreen,
  white,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import { mobileMaxWidth, tabletMaxWidth } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import {
  PageDiv,
  SocialMediaIconHover,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { H2Styled, Body2 } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const FooterDiv = styled(PageDiv)`
  height: auto;

  background: ${lightCoral};
`

// upper footer components

export const UpperFooterBg = styled.div`
  width: 100%;
  height: 200px;

  background: ${lightCoral};

  @media (max-width: ${mobileMaxWidth}) {
    height: 302px;
  }
`

export const FooterUpperContentDiv = styled.div`
  position: absolute;
  width: 63.5vw;
  height: 48px;
  left: 18.25vw;
  top: 76px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${mobileMaxWidth}) {
    width: 87vw;
    height: 136px;
    left: 6.5vw;
    top: 83px;

    flex-direction: column;
  }
`

export const FooterUpperTextStyled = styled(H2Styled)`
  position: absolute;
  height: 48px;
  left: 0;
  top: calc(50% - 48px / 2);

  color: ${sacramentoStateGreen};

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 4vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    top: 0;
    width: 100%;
    height: 64px;

    font-size: 32px;

    text-align: center;
  }
`

// lower footer components

export const LowerFooterBg = styled.div`
  position: relative;
  width: 100%;
  height: 196px;

  background: ${darkGreen};

  @media (max-width: ${tabletMaxWidth}) {
    height: 271px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 432px;
  }
`

export const FooterLeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 144px;
  left: 0px;
  top: 56px;

  z-index: 1;

  @media (max-width: ${mobileMaxWidth}) {
    top: 158px;
  }
`

export const FooterLowerContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 100px;
  left: 11.5vw;
  top: 48px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 90vw;
    height: 159px;
    left: 5vw;
    top: 56px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 87vw;
    height: 302px;
    left: 6.5vw;
    top: 66px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FooterLowerLeftStyled = styled.div`
  position: absolute;
  /* width: 20vw; */
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
`

export const FooterLowerRightStyled = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  right: 0;
  top: 0;

  @media (max-width: ${tabletMaxWidth}) {
    width: 50%;
  }
`

// lower footer elements

export const FooterAddressStyled = styled.div`
  position: absolute;
  height: 100%;
  left: 20vw;
  top: 0;

  ${Body2}

  mix-blend-mode: normal;
  opacity: 0.6;

  color: ${white};

  @media (max-width: ${tabletMaxWidth}) {
    right: 0;

    text-align: right;
  }

  @media (max-width: ${mobileMaxWidth}) {
    position: initial;

    margin-top: 24px;

    text-align: center;
  }
`

export const FooterSocialMediaDiv = styled.div`
  position: absolute;
  width: 104px;
  height: 24px;
  right: 0;
  top: 0px;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${tabletMaxWidth}) {
    left: 0;
    top: 134px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    position: initial;

    margin-top: 40px;

    text-align: center;
  }
`

export const FooterSocialMediaIconStyled = styled(SocialMediaIconHover)`
  width: 24px;
  height: 24px;
`

export const FooterCopyrightStyled = styled(Body2)`
  position: absolute;
  height: 25px;
  width: 22vw;
  right: 0;
  bottom: 0;

  text-align: right;

  mix-blend-mode: normal;
  opacity: 0.6;

  @media (max-width: ${tabletMaxWidth}) {
    width: 50vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    position: initial;

    margin-top: 16px;

    text-align: center;
  }
`
