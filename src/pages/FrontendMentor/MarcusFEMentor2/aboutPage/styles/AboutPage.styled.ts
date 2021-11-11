import styled from 'styled-components'

import { deepJungleGreen, midnightGreen, sacramentoStateGreen } from '../../styles/Colours.styled'
import { PageDiv } from '../../styles/GlobalDivStyles.styled'

export const About1MainBg = styled(PageDiv)`
  height: 517px;
  left: 0px;
  top: 0px;

  background: ${midnightGreen};
`

export const About1RightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  right: -100px;
  bottom: 0px;
`

export const About2MeetBg = styled(PageDiv)`
  height: 1002px;
  left: 0;

  background: ${deepJungleGreen};
`

export const About2TopLeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: -100px;
  top: 0px;
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
`

export const About3TopLeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0;
  top: 0;
`
