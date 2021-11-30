import styled from 'styled-components'

import {
  lightCoral,
  policeBlue,
  sacramentoStateGreen,
  white,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import { mobileMaxWidth } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import { body1Size } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/cssVariables.styled'
import { BtnDiv } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'

export const MyTeamLogoStyled = styled.img`
  width: 160px;
  height: auto;

  align-items: center;
`

export const HeaderHamburger = styled.img`
  position: absolute;
  right: 0;

  width: 20px;
  height: 17px;

  cursor: pointer;
`

export const HeaderBarStyled = styled.div`
  position: absolute;
  width: 77vw;
  height: 48px;
  left: 11.5vw;
  top: 73px;

  z-index: 5;

  @media (max-width: ${mobileMaxWidth}) {
    width: 87vw;
    height: 32px;
    left: 6.5vw;
    top: 48px;
  }
`

export const SideMenuBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  width: 68vw;

  background-color: ${policeBlue};

  z-index: 10;
`

export const SideMenuBgDim = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 100%;

  background-color: black;
  opacity: 0.5;

  z-index: 9;
`

export const SideMenuContentDiv = styled.div`
  position: absolute;
  top: 112px;
  left: 12.8vw;

  width: 42vw;
  height: 164px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SideMenuBgLogo = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  right: -100px;
  top: 467px;
`

export const SideMenuExitBtn = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 56.8vw;
  top: 56px;

  cursor: pointer;
`

export const HeaderBarTextDiv = styled.div`
  position: absolute;
  width: 380px;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HeaderBarLinksStyled = styled.div<{ responsive?: boolean; column?: boolean; margin?: string }>`
  width: ${(props) => (props.responsive ? 'max(10vw, 140px)' : '140px')};
  height: ${(props) => (props.column ? '70px' : '28px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-between;
`

export const BarLink = styled.span<{ responsive?: boolean }>`
  ${body1Size}
  line-height: 100%;

  color: ${white};

  cursor: pointer;

  :hover {
    color: ${lightCoral};
  }
`

export const ContactBtnDiv = styled(BtnDiv)<{ margin?: string }>`
  width: 153px;
  height: 48px;
  margin: ${(props) => (props.margin ? props.margin : '0')};

  border-color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
  color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};

  :hover {
    background: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
    border-color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
    color: ${(props) => (props.color === 'dark' ? white : sacramentoStateGreen)};
  }
`
