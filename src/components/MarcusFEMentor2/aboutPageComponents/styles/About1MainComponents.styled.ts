import styled from 'styled-components'

import { lightCoral } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import { LineAbovePara } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { Body1, H1Small } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const About1ContentsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: max(10.8vw, 156px);
  left: 11.5vw;
  top: 241px;

  display: flex;
  flex-direction: row;

  @media (max-width: ${tabletMaxWidth}) {
    width: 89vw;
    height: 220px;

    left: 5.5vw;
    top: calc(168px + 7vw);
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 87vw;
    height: 252px;

    left: 6.5vw;
    top: 160px;
  }
`

export const About1Title = styled(H1Small).attrs({ responsive: true })`
  position: absolute;
  width: 24vw;
  height: 100px;
  left: 0;
  top: 0;

  line-height: 100px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 56px;
    left: 0;
    top: 0;

    line-height: 0;

    text-align: center;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 40px;
  }
`

export const About1ParaDiv = styled.div`
  position: absolute;
  width: 50.5vw;
  height: 100%;
  bottom: 0;
  right: 0;

  @media (max-width: ${tabletMaxWidth}) {
    width: 58vw;
    height: 140px;
    left: 14vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    height: 196px;
    bottom: 0;
    left: 0;
  }
`

export const About1Para = styled(Body1).attrs({ responsive: true })`
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: ${tabletMaxWidth}) {
    text-align: center;
  }
`

export const About1LineAbovePara = styled(LineAbovePara)`
  /* Rectangle */
  background: ${lightCoral};

  @media (max-width: ${tabletMaxWidth}) {
    opacity: 0;
  }
`
