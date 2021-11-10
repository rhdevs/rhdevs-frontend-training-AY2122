import styled from 'styled-components'
import {
  lightCoral,
  sacramentoStateGreen,
  white,
} from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'

export const MyTeamLogoStyled = styled.h1<{ top?: string }>`
  position: absolute;
  width: 160px;
  height: 100%;
  top: ${(props) => props.top ?? '0'};

  font-size: 30px;
  font-weight: bold;

  color: ${white};
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

export const ContactBtnDiv = styled.div`
  position: absolute;
  width: 153px;
  height: 48px;
  right: 0;
  text-align: center;
  text-justify: inter-word;

  border-style: solid;
  border-width: 3px;
  border-radius: 24px;

  color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};

  :hover {
    background: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
    border-color: ${(props) => (props.color === 'light' ? white : sacramentoStateGreen)};
    color: ${(props) => (props.color === 'dark' ? white : sacramentoStateGreen)};
  }
`

export const ContactBtnText = styled.p`
  height: 100%;

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  margin-top: 5px;
`
