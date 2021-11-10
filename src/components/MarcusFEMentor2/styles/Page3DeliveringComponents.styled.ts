import styled from 'styled-components'

import { raptureBlue, white } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import { body1, body2, h2Styled } from '../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

// width 1440px (rel), height 745px (abs)

export const Page3ContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 465px;
  left: 11.5vw;
  top: 140px;
`

export const Page3TitleStyled = styled(h2Styled)`
  position: absolute;
  width: 65vw;
  height: 96px;
  left: 6vw;
  top: 0;

  text-align: center;
`

export const Page3TitleEm = styled.span`
  color: ${raptureBlue};
`

export const Page3StoriesDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 313px;
  left: 0;
  top: 152px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Page3StoryDiv = styled.div`
  width: 24.3vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Page3StoryBg = styled.img`
  margin-top: 22px;
`

export const Page3StoryPara = styled(body2)`
  margin-top: -22px;

  text-align: center;
`

export const Page3StoryName = styled(body1)`
  height: 28px;

  text-align: center;

  color: ${raptureBlue};
`

export const Page3StoryTitle = styled.p`
  height: 18px;

  font-style: italic;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;

  text-align: center;

  color: ${white};
`
