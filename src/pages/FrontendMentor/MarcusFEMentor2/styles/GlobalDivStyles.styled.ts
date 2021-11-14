import styled from 'styled-components'

import { sacramentoStateGreen, white } from './Colours'
import { filterWhiteToLightCoral, livvicFont, styledInput } from './cssVariables.styled'
import { Body1 } from './TextStyles.styled'

// div styles

export const PageDiv = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden; // cut off overflowing background logos
`

export const LineAbovePara = styled.div`
  /* Rectangle to be placed on top left corner within a div */

  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 4px;
`

export const FaceImage = styled.img`
  width: max(4.3vw, 62px);
  height: max(4.3vw, 62px);
  border: 2px solid #c4fffe;
  border-radius: 50%;
`

export const SocialMediaIconHover = styled.img`
  cursor: pointer;

  :hover {
    ${filterWhiteToLightCoral}// magic that converts icon from white to lightCoral on hover
  }
`

export const BtnDiv = styled.button`
  border-style: solid;
  border-width: 3px;
  border-radius: 24px;
  border-color: ${white};

  color: ${white};
  background-color: transparent;

  cursor: pointer;

  display: flex;
  justify-content: center;
`

export const SubmitBtnDiv = styled(BtnDiv)`
  width: 123px;
  height: 48px;
  color: ${white};

  :hover {
    background: ${white};
    border-color: ${white};
    color: ${sacramentoStateGreen};
  }
`

export const BtnText = styled(Body1)`
  margin-top: 4.25px;
  height: 100%;

  color: inherit;
`

export const TextInput = styled.input.attrs({ type: 'text', responsive: true })`
  ${styledInput}
`

export const TextAreaInput = styled.textarea.attrs({ responsive: true })`
  ${styledInput}
`

export const TextInputRequiredWarningLabel = styled.label.attrs({ responsive: true })`
  ${livvicFont}
  font-style: italic;
  font-weight: bold;
  font-size: ${(props) => (props.responsive ? 'max(0.7vw, 10px)' : '10px')};
  line-height: ${(props) => (props.responsive ? 'max(13px, 0.9vw)' : '13px')};
  color: transparent;
`
