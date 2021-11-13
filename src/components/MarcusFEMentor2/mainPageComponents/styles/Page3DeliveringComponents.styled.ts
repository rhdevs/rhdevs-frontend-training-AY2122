import styled from 'styled-components'

import { raptureBlue, white } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import { livvicFont } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/cssVariables.styled'
import { Body2, H2Styled, H3Styled } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// component desktop width 1440px (100vw), height 745px (absolute)

export const Page3ContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 32vw;
  left: 11.5vw;
  top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${tabletMaxWidth}) {
    width: 74.5vw;
    height: 999px;
    left: 12.75vw;
    top: 100px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 87vw;
    height: 1106px;
    left: 6.5vw;
    top: 140px;
  }
`

export const Page3TitleStyled = styled(H2Styled).attrs({ responsive: true })`
  width: 65vw;
  height: 192px;

  text-align: center;
`

export const Page3TitleEm = styled.span`
  color: ${raptureBlue};
`

export const Page3StoriesDiv = styled.div`
  width: 77vw;
  height: 313px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 903px;

    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    height: 930px;
  }
`

export const Page3StoryDiv = styled.div`
  width: 24.3vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    height: 253px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 278px;
  }
`

export const Page3StoryBg = styled.img`
  margin-top: 22px;
`

export const Page3StoryPara = styled(Body2).attrs({ responsive: true })`
  margin-top: -22px;

  text-align: center;
`

export const Page3StoryName = styled(H3Styled).attrs({ responsive: true })`
  height: 28px;

  text-align: center;

  color: ${raptureBlue};
`

export const Page3StoryTitle = styled.p`
  ${livvicFont}
  height: 18px;

  font-style: italic;
  font-weight: 500;
  font-size: 0.9vw;
  line-height: 138%;

  text-align: center;

  color: ${white};

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 13px;
  }
`
