import styled from 'styled-components'

import { lightCoral, white } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'
import { H1Small, H2Styled, H3Styled } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const Contact1ContentsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 428px;
  left: 11.5vw;
  top: 241px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 69vw;
    height: 868px;
    left: 15.5vw;
    top: 224px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    top: 160px;
  }
`

export const Contact1Title = styled(H1Small).attrs({ responsive: true })`
  position: absolute;
  width: max(350px, 24vw);
  height: 100px;
  left: 0;
  top: 0;

  line-height: 100px;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 56px;

    text-align: center;
  }
`

export const Contact1Subtitle = styled(H2Styled).attrs({ responsive: true })`
  position: absolute;
  width: 37.5vw;
  height: 48px;
  left: 0;
  top: 116px;

  font-size: 32px;
  line-height: 48px;

  color: ${lightCoral};

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 48px;
    left: 0;
    top: 80px;
    font-size: 32px;
    line-height: 150%;

    text-align: center;
  }
`

export const Contact1AboutDiv = styled.div`
  position: absolute;
  width: 37.5vw;
  height: 16vw;
  left: 0;
  top: 196px;

  color: ${white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 232px;
    top: 152px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    top: 144px;
  }
`

export const Contact1AboutEntryDiv = styled.div`
  width: 100%;
  height: 5vw;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${tabletMaxWidth}) {
    height: 72px;
  }
`

export const Contact1Icon = styled.img`
  width: 5vw;
  height: 5vw;

  @media (max-width: ${tabletMaxWidth}) {
    width: 72px;
    height: 72px;
  }
`

export const Contact1AboutContent = styled(H3Styled).attrs({ responsive: true })`
  height: 28px;
  margin-left: 23px;
`

export const Contact1FormDiv = styled.form`
  position: absolute;
  width: 37.5vw;
  height: 29vw;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${tabletMaxWidth}) {
    width: 69vw;
    height: 420px;

    top: 448px;
    left: 0;
  }
`
