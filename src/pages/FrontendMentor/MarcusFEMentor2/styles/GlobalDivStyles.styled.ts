import styled from 'styled-components'

import { sacramentoStateGreen, white } from './Colours.styled'
import { filterWhiteToLightCoral, styledInput } from './cssVariables.styled'

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
  width: 62px;
  height: 62px;
  border: 2px solid #c4fffe;
  border-radius: 50%;
`

export const SocialMediaIconHover = styled.img`
  :hover {
    ${filterWhiteToLightCoral}// magic that converts icon from white to lightCoral on hover
  }
`

export const BtnDiv = styled.button`
  text-align: center;
  text-justify: inter-word;

  border-style: solid;
  border-width: 3px;
  border-radius: 24px;
  border-color: ${white};

  color: ${white};
  background-color: transparent;
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

export const BtnText = styled.p`
  height: 100%;

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  margin-top: 5px;
`

export const TextInput = styled.input.attrs({ type: 'text' })`
  ${styledInput}
`

export const TextAreaInput = styled.textarea`
  ${styledInput}
`

export const TextInputRequiredWarningLabel = styled.label`
  /* font-family: Livvic; */
  font-style: italic;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  color: transparent;
  /* color: transparent; */
`
