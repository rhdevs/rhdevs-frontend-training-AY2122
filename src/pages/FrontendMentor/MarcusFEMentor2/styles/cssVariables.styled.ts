import { css } from 'styled-components'

import { white, raptureBlue, lightCoral } from './Colours.styled'

export const styledInput = css`
  width: 100%;
  padding: 7px 0;

  border: 0;
  border-bottom: 1px solid ${white};

  outline: 0;

  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;

  color: ${white};
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom: 1px solid ${raptureBlue};
  }

  :focus:invalid {
    border-bottom: 1px solid ${lightCoral};
  }
`

export const filterWhiteToLightCoral = css`
  filter: brightness(0) saturate(100%) invert(65%) sepia(27%) saturate(1679%) hue-rotate(311deg) brightness(103%)
    contrast(93%);
` // magic that converts icon from white to lightCoral on hover
