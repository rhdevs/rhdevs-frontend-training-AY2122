import styled from 'styled-components'

import { lightCoral, raptureBlue } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import { LineAbovePara } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { H1Large, Body1 } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// component desktop width 1440px (100vw), height 700px (absolute)

export const Title = styled(H1Large).attrs({ responsive: true })`
  position: absolute;
  width: 40vw;
  height: 200px;
  left: 11.5vw;
  top: 250px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 40vw;
    height: 112px;
    left: 30vw;
    top: 224px;

    text-align: center;
    justify-content: center;
  }

  @media (max-width: 980px) {
    width: 60vw;
    left: 20vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    top: 160px;
    height: 80px;
  }
`

export const TitleEm = styled.span`
  color: ${lightCoral};
`

export const TitleParagraphDiv = styled.div`
  position: absolute;
  width: 31vw;
  height: 13.5vw;
  left: 58vw;
  top: 250px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 65vw;
    height: 84px;
    left: 17.5vw;
    top: 390px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    top: 345px;
  }
`

export const Page1LineAbovePara = styled(LineAbovePara)`
  /* Rectangle */
  background: ${raptureBlue};

  @media (max-width: ${tabletMaxWidth}) {
    background: transparent;
  }
`

export const TitleParagraph = styled(Body1).attrs({ responsive: true })`
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: ${tabletMaxWidth}) {
    text-align: center;
  }
`
