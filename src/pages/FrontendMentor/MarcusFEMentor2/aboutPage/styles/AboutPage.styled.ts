import styled from 'styled-components'

import { deepJungleGreen, midnightGreen, sacramentoStateGreen } from '../../styles/Colours'
import { mobileMaxWidth, tabletMaxWidth } from '../../styles/ResponsiveWidths'
import { PageDiv } from '../../styles/GlobalDivStyles.styled'

export const About1MainBg = styled(PageDiv)`
  height: calc(258px + 18vw);
  left: 0px;
  top: 0px;

  background: ${midnightGreen};

  @media (max-width: ${tabletMaxWidth}) {
    height: 556px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 520px;
  }
`

export const About1RightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  right: -100px;
  bottom: 0px;

  @media (max-width: ${mobileMaxWidth}) {
    bottom: -100px;
  }
`

export const About2MeetBg = styled(PageDiv)`
  height: 69.5vw;
  left: 0;

  background: ${deepJungleGreen};

  @media (max-width: ${tabletMaxWidth}) {
    height: calc(305px + 120vw);
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 2262px;
  }
`

export const About2TopLeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: -100px;
  top: 0px;

  @media (max-width: ${mobileMaxWidth}) {
    top: -100px;
  }
`

export const About2BottomRightLogoBg = styled.img`
  position: absolute;
  width: 147px;
  height: 100px;
  right: 0;
  bottom: 0;
`

export const About3SomeBg = styled(PageDiv)`
  height: 437px;
  left: 0px;

  background: ${sacramentoStateGreen};

  @media (max-width: ${mobileMaxWidth}) {
    height: 632px;
  }
`

export const About3TopLeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0;
  top: 0;

  @media (max-width: ${mobileMaxWidth}) {
    left: -100px;
    top: -100px;
  }
`
