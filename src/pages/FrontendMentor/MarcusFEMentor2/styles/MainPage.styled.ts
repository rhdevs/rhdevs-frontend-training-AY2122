import styled from 'styled-components'

import { deepJungleGreen, midnightGreen, sacramentoStateGreen, white } from './Colours.styled'
import { PageDiv } from './DivStyles.styled'

export const MainPageStyled = styled.div`
  color: ${white};
`

export const Page1MainBg = styled(PageDiv)`
  height: 700px;

  background: ${midnightGreen};
`

export const Page1LeftLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: -100px;
  top: 250px;
`

export const Page1BottomLogoBg = styled.img`
  position: absolute;
  width: 358px;
  height: 100px;
  left: 63.5vw;
  top: 600px;
`

export const Page2BuildBg = styled(PageDiv)`
  height: 684px;

  background: ${sacramentoStateGreen};
`

export const Page2RightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 244px;
  right: -100px;
  top: 440px;
`

export const Page3DeliveringBg = styled(PageDiv)`
  height: 745px;

  background: ${deepJungleGreen};
`

export const Page3TopLeftLogoBg = styled.img`
  position: absolute;
  width: 147px;
  height: 100px;
  left: 0;
  top: 0px;
`

export const Page3BottomRightLogoBg = styled.img`
  position: absolute;
  width: 200px;
  height: 100px;
  right: 0;
  top: 645px;
`
