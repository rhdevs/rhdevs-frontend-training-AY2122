import styled from 'styled-components'

import { lightCoral, raptureBlue } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import { LineAbovePara } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/DivStyles.styled'
import { h1Large, body1 } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// figma width 1440 (100vw), height 700 (abs)

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
`

export const Title = styled(h1Large)`
  position: absolute;
  width: 40vw;
  height: 200px;
  left: 11.5vw;
  top: 250px;
`

export const TitleEm = styled.span`
  color: ${lightCoral};
`

export const TitleParagraphDiv = styled.div`
  position: absolute;
  width: 31vw;
  height: 195px;
  left: 58vw;
  top: 250px;
`

export const Page1LineAbovePara = styled(LineAbovePara)`
  /* Rectangle */
  background: ${raptureBlue};
`

export const TitleParagraph = styled(body1)`
  position: absolute;
  bottom: 0;
  left: 0;
`
