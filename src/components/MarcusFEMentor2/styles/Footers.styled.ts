import styled from 'styled-components'

import {
  darkGreen,
  lightCoral,
  sacramentoStateGreen,
  white,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import {
  PageDiv,
  SocialMediaIconHover,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { h2Styled, body2 } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// width 1440px (rel), height 745px (abs)

export const FooterDiv = styled(PageDiv)`
  height: auto;

  background: ${lightCoral};
`

export const UpperFooterBg = styled.div`
  width: 100%;
  height: 200px;

  background: ${lightCoral};
`

export const LowerFooterBg = styled.div`
  position: relative;
  width: 100%;
  height: 196px;

  background: ${darkGreen};
`

export const FooterLeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 144px;
  left: 0px;
  top: 56px;

  z-index: 1;
`

export const FooterUpperContentDiv = styled.div`
  position: absolute;
  width: 63.5vw;
  height: 48px;
  left: 18.25vw;
  top: 76px;

  display: flex;
  justify-content: space-between;
`

export const FooterUpperTextStyled = styled(h2Styled)`
  position: absolute;
  height: 48px;
  left: 0;
  top: calc(50% - 48px / 2);

  color: ${sacramentoStateGreen};
`

export const FooterLowerContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 100px;
  left: 11.5vw;
  top: 48px;
`

export const FooterLowerLeftStyled = styled.div`
  position: absolute;
  width: 20vw;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
`

export const FooterAddressStyled = styled.div`
  position: absolute;
  height: 100%;
  left: 20vw;
  top: 0;

  font-weight: 600;
  font-size: 15px;
  line-height: 25px;

  mix-blend-mode: normal;
  opacity: 0.6;

  color: ${white};
`

export const FooterLowerRightStyled = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
`

export const FooterSocialMediaDiv = styled.div`
  position: absolute;
  width: 104px;
  height: 24px;
  right: 0;
  top: 0px;

  display: flex;
  justify-content: space-between;
`

export const FooterSocialMediaIconStyled = styled(SocialMediaIconHover)`
  width: 24px;
  height: 24px;
`

export const FooterCopyrightStyled = styled(body2)`
  position: absolute;
  height: 25px;
  width: 22vw;
  right: 0;
  bottom: 0;

  text-align: right;

  mix-blend-mode: normal;
  opacity: 0.6;
`
