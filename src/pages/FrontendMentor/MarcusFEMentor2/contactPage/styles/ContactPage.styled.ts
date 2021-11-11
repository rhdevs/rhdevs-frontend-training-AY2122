import styled from 'styled-components'

import { midnightGreen } from '../../styles/Colours.styled'
import { PageDiv } from '../../styles/GlobalDivStyles.styled'

export const Contact1MainBg = styled(PageDiv)`
  height: max(789px, calc(100vh - 200px));
  left: 0px;
  top: 0px;

  background: ${midnightGreen};
`

export const Contact1LeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: -100px;
  top: 245px;
`

export const Contact1RightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  right: -100px;
  bottom: 0;
`
