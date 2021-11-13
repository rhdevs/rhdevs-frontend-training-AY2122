import styled from 'styled-components'

import { midnightGreen } from '../../styles/Colours'
import { mobileMaxWidth, tabletMaxWidth } from '../../styles/ResponsiveWidths'
import { PageDiv } from '../../styles/GlobalDivStyles.styled'

export const Contact1MainBg = styled(PageDiv)`
  height: max(789px, calc(100vh - 200px));
  left: 0px;
  top: 0px;

  background: ${midnightGreen};

  @media (max-width: ${tabletMaxWidth}) {
    height: 1204px;
  }
`

export const Contact1LeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: -100px;
  top: 245px;

  @media (max-width: ${tabletMaxWidth}) {
    top: 216px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    opacity: 0;
  }
`

export const Contact1RightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  right: -100px;
  bottom: 0;

  @media (max-width: ${mobileMaxWidth}) {
    bottom: -100px;
  }
`
