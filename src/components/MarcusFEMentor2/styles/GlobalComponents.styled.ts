import styled from 'styled-components'

import {
  lightCoral,
  sacramentoStateGreen,
  white,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import { BtnDiv } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'

export const MyTeamLogoStyled = styled.img`
  width: 160px;
  height: auto;
`

export const HeaderBarStyled = styled.div`
  position: absolute;
  width: 77vw;
  height: 48px;
  left: 11.5vw;
  top: 73px;
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
  /* justify-content: center; */
`

export const HeaderBarLinksStyled = styled.div<{ left?: string; top?: string; responsive?: boolean }>`
  position: absolute;
  width: ${(props) => (props.responsive ? 'max(10vw, 140px)' : '140px')};
  height: 28px;
  left: ${(props) => props.left ?? '0'};
  top: ${(props) => props.top ?? '0'};

  display: flex;
  justify-content: space-between;
`

export const BarLink = styled.a`
  color: ${white};

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  :hover {
    color: ${lightCoral};
  }
`

export const ContactBtnDiv = styled(BtnDiv)`
  position: absolute;
  width: 153px;
  height: 48px;
  right: 0;

  border-color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
  color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};

  :hover {
    background: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
    border-color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
    color: ${(props) => (props.color === 'dark' ? white : sacramentoStateGreen)};
  }
`
