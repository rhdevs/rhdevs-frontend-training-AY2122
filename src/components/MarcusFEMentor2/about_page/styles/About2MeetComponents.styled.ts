import styled from 'styled-components'

import {
  lightCoral,
  raptureBlue,
  sacramentoStateGreen,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import {
  FaceImage,
  SocialMediaIconHover,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/DivStyles.styled'
import { h2Styled, h3Styled, body2 } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const About2ContentsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 722px;
  left: 11.5vw;
  top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const About2Title = styled(h2Styled)`
  width: 64vw;
  height: 48px;

  text-align: center;
`

export const About2DirectorsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 610px;
  left: 0;
  top: 112px;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 2vw;
  grid-row-gap: 48px;
`

export const About2DirectorCardDiv = styled.div`
  width: 24.3vw;
  height: 281px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const About2DirectorFlipCardDiv = styled.div`
  width: 100%;
  height: 253px;
  background: ${sacramentoStateGreen};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const About2CardFaceImage = styled(FaceImage)`
  margin-top: 32px;
`

export const About2CardName = styled(h3Styled)<{ top: string }>`
  margin-top: ${(props) => props.top};
  width: 21vw;
  height: 28px;

  text-align: center;

  color: ${raptureBlue};
`

export const About2CardTitle = styled(body2)`
  margin-top: 0;
  width: 21vw;
  height: 28px;

  text-align: center;

  font-style: italic;
  font-weight: 500;
`

export const About2CardButton = styled.div`
  margin-top: -2vw;

  width: 4vw;
  height: 4vw;

  background: ${lightCoral};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  :hover {
    background: ${raptureBlue};
  }
`

export const About2CardButtonIcon = styled.img`
  width: 1.1vw;
  height: 1.1vw;
  filter: brightness(0); // set icon to black
`

export const About2CardQuote = styled(body2)`
  margin-top: 8px;

  width: 17.5vw;
  height: 75px;

  text-align: center;
`

export const About2CardIconsDiv = styled.div`
  margin-top: 12px;

  width: max(80px, 5.5vw);
  height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const About2CardIcon = styled(SocialMediaIconHover)`
  width: 22px;
  height: 22px;
`
