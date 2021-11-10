import styled from 'styled-components'

import { white } from './Colours.styled'

// text styles

export const h1Large = styled.h1`
  /* font-family: Livvic; */
  font-style: normal;
  font-weight: bold;
  font-size: 7vw; // or 100px
  line-height: max(100px, 5.5vw); //prevent text overlap on very wide screens

  color: ${white};
`

export const h1Small = styled.h1`
  /* font-family: Livvic; */
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 56px;

  color: ${white};
`

export const h2Styled = styled.h2`
  /* font-family: Livvic; */
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;

  color: ${white};
`

export const h3Styled = styled.h3`
  /* font-family: Livvic; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  color: ${white};
`

export const body1 = styled.p`
  /* font-family: Livvic; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  color: ${white};
`

export const body2 = styled.p`
  /* font-family: Livvic; */
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;

  color: ${white};
`
