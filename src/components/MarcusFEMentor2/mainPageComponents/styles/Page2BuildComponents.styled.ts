import styled from 'styled-components'

import { lightCoral, white } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import { LineAbovePara } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { H3Styled, Body2 } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// component desktop width 1440px (100vw), height 684px (absolute)

export const Page2ContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 404px;
  left: 11.5vw;
  top: 140px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 82vw;
    height: 510px;
    left: 9vw;
    top: 100px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 87.2vw;
    height: 945px;
    left: 6.4vw;
    top: 64px;
  }
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

  @media (max-width: ${tabletMaxWidth}) {
    width: 63.5vw;
    height: 64px;
    top: 36px;

    font-size: 32px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 64vw;
    height: 196px;
  }
`

export const Page2ParagraphsDiv = styled.div`
  position: absolute;
  width: 37.5vw;
  height: 100%;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-style: normal;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 346px;
    bottom: 0;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 693px;
  }
`

export const Page2ParagraphStyled = styled.div`
  width: 37.5vw;
  height: 6.5vw;

  display: flex;
  flex-direction: row;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 94px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 199px;
    flex-direction: column;
    align-items: center;
  }
`

export const Page2Icon = styled.img`
  display: block;
  height: 80%;
  margin-right: 3vw;

  @media (max-width: ${tabletMaxWidth}) {
    height: 72px;
  }
`

export const Page2ParaTitle = styled(H3Styled).attrs({ responsive: true })`
  color: ${lightCoral};

  @media (max-width: ${mobileMaxWidth}) {
    text-align: center;
  }
`

export const Page2ParaPara = styled(Body2).attrs({ responsive: true })`
  mix-blend-mode: normal;
  opacity: 0.8;

  @media (max-width: ${mobileMaxWidth}) {
    text-align: center;
  }
`
