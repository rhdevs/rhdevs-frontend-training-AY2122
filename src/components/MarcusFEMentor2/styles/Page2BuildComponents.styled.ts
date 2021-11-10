import styled from 'styled-components'

import { lightCoral, white } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import { LineAbovePara } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/DivStyles.styled'
import { h3Styled, body2 } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// width 1440px (rel), height 684px (abs)

export const Page2ContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 404px;
  left: 11.5vw;
  top: 140px;
`

export const Page2LineAboveTitle = styled(LineAbovePara)`
  /* Rectangle */
  background: ${lightCoral};
`

export const Page2TitleDiv = styled.div`
  position: absolute;
  width: 31vw;
  height: 202px;
  left: 0;
  top: calc(202px - 140px);

  font-weight: bold;
  font-size: 48px;
  line-height: 100%;

  color: ${white};
`

export const Page2ParagraphsDiv = styled.div`
  position: absolute;
  width: 37.5vw;
  height: 346px;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-style: normal;
`

export const Page2ParagraphStyled = styled.div`
  width: 37.5vw;
  height: 94px;

  display: flex;
  flex-direction: row;
`

export const Page2Icon = styled.img`
  display: block;
  height: 80%;
  margin-right: 3vw;
`

export const Page2ParaTitle = styled(h3Styled)`
  color: ${lightCoral};
`

export const Page2ParaPara = styled(body2)`
  mix-blend-mode: normal;
  opacity: 0.8;
`
