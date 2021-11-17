import styled from 'styled-components'

import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'
import { H2Styled } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const About3Title = styled(H2Styled)`
  position: absolute;
  left: 18vw;
  top: 140px;

  width: 64vw;
  height: 48px;

  text-align: center;

  @media (max-width: ${mobileMaxWidth}) {
    left: 6.5vw;
    top: 88px;

    width: 87vw;
  }
`

export const About3ClientsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 45px;
  left: 11.5vw;
  top: 252px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${mobileMaxWidth}) {
    width: 43vw;
    height: 360px;
    left: 28.5vw;
    top: 184px;

    flex-direction: column;
    align-items: center;
  }
`

export const About3ClientLogo = styled.img`
  width: auto;
  height: 28px;

  @media (max-width: ${tabletMaxWidth}) {
    height: 2.2vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: auto;
    height: 24px;
  }
`
