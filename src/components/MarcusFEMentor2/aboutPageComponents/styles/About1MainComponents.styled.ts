import styled from 'styled-components'

import { lightCoral } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import { LineAbovePara } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { body1, h2Styled } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const About1ContentsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 156px;
  left: 11.5vw;
  top: 241px;

  display: flex;
  flex-direction: row;
`

export const About1Title = styled(h2Styled)`
  position: absolute;
  width: 24vw;
  height: 100px;
  left: 0;
  top: 0;

  line-height: 100px;
`

export const About1ParaDiv = styled.div`
  position: absolute;
  width: 50.5vw;
  height: 100%;
  top: 0;
  right: 0;
`

export const About1Para = styled(body1)`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const About1LineAbovePara = styled(LineAbovePara)`
  /* Rectangle */
  background: ${lightCoral};
`
