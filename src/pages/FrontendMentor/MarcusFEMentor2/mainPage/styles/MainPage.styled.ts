import styled from 'styled-components'

import { deepJungleGreen, midnightGreen, sacramentoStateGreen } from '../../styles/Colours'
import { mobileMaxWidth, tabletMaxWidth } from '../../styles/ResponsiveWidths'
import { PageDiv } from '../../styles/GlobalDivStyles.styled'

export const Page1MainBg = styled(PageDiv)`
  height: 700px;

  background: ${midnightGreen};

  @media (max-width: ${mobileMaxWidth}) {
    height: 567px;
  }
`

export const Page1LeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: -100px;
  top: 250px;

  @media (max-width: ${tabletMaxWidth}) {
    opacity: 0;
  }
`

export const Page1BottomLogoBg = styled.img`
  position: absolute;
  width: 358px;
  height: 100px;
  left: 63.5vw;
  bottom: 0;

  @media (max-width: ${tabletMaxWidth}) {
    left: calc(50vw - (358px / 2));
    bottom: 0;
  }
`

export const Page2BuildBg = styled(PageDiv)`
  height: 684px;

  background: ${sacramentoStateGreen};

  @media (max-width: ${tabletMaxWidth}) {
    height: 710px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 1073px;
  }
`

export const Page2RightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 244px;
  right: -100px;
  bottom: 0;

  @media (max-width: ${tabletMaxWidth}) {
    top: 0;
  }
`

export const Page3DeliveringBg = styled(PageDiv)`
  height: calc(23vw + 372px);

  background: ${deepJungleGreen};

  @media (max-width: ${tabletMaxWidth}) {
    height: 1199px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 1410px;
  }
`

export const Page3TopLeftLogoBg = styled.img`
  position: absolute;
  width: 147px;
  height: 100px;
  left: 0;
  top: 0;
`

export const Page3BottomRightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 100px;
  right: 0;
  bottom: 0;
`
