import { css } from 'styled-components'
import 'typeface-livvic'

import { white, raptureBlue, lightCoral } from './Colours'
import { mobileMaxWidth, tabletMaxWidth } from './ResponsiveWidths'

export const livvicFont = css`
  font-family: Livvic, Arial;
  font-style: normal;

  color: ${white};
`

export const styledInput = css<{ responsive?: boolean }>`
  width: 100%;
  padding: 7px 0;

  border: 0;
  border-bottom: 1px solid ${white};

  outline: 0;

  ${livvicFont}
  font-weight: 600;
  font-size: ${(props) => (props.responsive ? 'max(1vw, 15px)' : '15px')};
  line-height: ${(props) => (props.responsive ? 'max(25px, 1.7vw)' : '25px')};

  color: ${white};
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: ${raptureBlue};
  }

  :focus:invalid {
    border-bottom-color: ${lightCoral};
  }
`

export const filterWhiteToLightCoral = css`
  filter: brightness(0) saturate(100%) invert(65%) sepia(27%) saturate(1679%) hue-rotate(311deg) brightness(103%)
    contrast(93%);
` // magic that converts icon from white to lightCoral on hover

export const h1LargeSize = css<{ responsive?: boolean }>`
  ${livvicFont}
  font-weight: bold;
  font-size: ${(props) => (props.responsive ? '7vw' : '100px')};
  line-height: ${(props) =>
    props.responsive ? 'max(100px, 5.5vw)' : '100px'}; //prevent text overlap on very wide screens

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 64px;
    line-height: 100%;
  }

  @media (max-width: ${mobileMaxWidth}) {
    font-size: 40px;
  }
`

export const h1SmallSize = css<{ responsive?: boolean }>`
  ${livvicFont}
  font-weight: bold;
  font-size: ${(props) => (props.responsive ? '4.4vw' : '64px')};
  line-height: 87%;

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 64px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    font-size: 40px;
  }
`

export const h2Size = css<{ responsive?: boolean }>`
  ${livvicFont}
  font-weight: bold;
  font-size: ${(props) => (props.responsive ? '3.3vw' : '48px')};
  line-height: 100%;

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 48px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    font-size: 32px;
  }
`

export const h3Size = css<{ responsive?: boolean }>`
  ${livvicFont}
  font-weight: bold;
  font-size: ${(props) => (props.responsive ? 'max(1.25vw, 18px)' : '18px')};
  line-height: 167%;

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 18px;
  }
`

export const body1Size = css<{ responsive?: boolean }>`
  ${livvicFont}
  font-weight: 600;
  font-size: ${(props) => (props.responsive ? 'max(1.25vw, 18px)' : '18px')};
  line-height: 167%;

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 15px;
    line-height: 187%;
  }
`

export const body2Size = css<{ responsive?: boolean }>`
  ${livvicFont}
  font-weight: 600;
  font-size: ${(props) => (props.responsive ? 'max(1vw, 15px)' : '15px')};
  line-height: 167%;

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 15px;
  }
`
