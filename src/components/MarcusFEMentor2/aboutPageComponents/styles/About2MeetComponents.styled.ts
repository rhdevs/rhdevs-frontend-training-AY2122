import styled, { css } from 'styled-components'

import {
  lightCoral,
  raptureBlue,
  sacramentoStateGreen,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  mobileMaxWidth,
  tabletMaxWidth,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import {
  FaceImage,
  SocialMediaIconHover,
} from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { H2Styled, H3Styled, Body2 } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const About2ContentsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 50vw;
  left: 11.5vw;
  top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${tabletMaxWidth}) {
    width: 74.5vw;
    height: 1019px;
    left: 12.75vw;
    top: 100px;
  }
`

export const About2Title = styled(H2Styled)`
  width: 64vw;
  height: 48px;

  text-align: center;

  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    height: 32px;
  }
`

export const About2DirectorsDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 42.3vw;
  left: 0;
  top: 112px;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 2vw;
  grid-row-gap: 48px;

  @media (max-width: ${tabletMaxWidth}) {
    height: 939px;
    top: 80px;

    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 1806px;

    grid-template-rows: repeat(6, auto);
    grid-template-columns: repeat(1, auto);
  }
`

export const About2DirectorCardDiv = styled.div`
  width: 24.3vw;
  height: 19.5vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${tabletMaxWidth}) {
    width: 36.5vw;
    height: 36.5vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    height: 281px;
  }
`

export const About2DirectorFlipCardDiv = styled.div`
  width: 100%;
  height: 17.5vw;
  background: ${sacramentoStateGreen};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    height: 33vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: 253px;
  }
`

export const About2CardFaceImage = styled(FaceImage)`
  width: 4.3vw;
  height: 4.3vw;

  margin-top: 2.2vw;

  @media (max-width: ${tabletMaxWidth}) {
    margin-top: -2vw;

    width: 12.5vw;
    height: 12.5vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    margin-top: -20px;
    width: 96px;
    height: 96px;
  }
`

export const About2CardName = styled(H3Styled).attrs({ responsive: true })<{ top: string }>`
  margin-top: ${(props) => props.top};
  width: 21vw;
  height: 1.9vw;

  text-align: center;

  color: ${raptureBlue};

  @media (max-width: ${mobileMaxWidth}) {
    width: 75vw;
  }
`

export const About2CardNameReverse = styled(About2CardName).attrs({ responsive: true })<{ top: string }>`
  @media (max-width: ${tabletMaxWidth}) {
    margin-top: -6vw;
  }
`

export const About2CardTitle = styled(Body2).attrs({ responsive: true })`
  margin-top: 0;
  width: 21vw;
  height: 1.9vw;

  text-align: center;

  font-style: italic;
  font-weight: 500;

  @media (max-width: ${mobileMaxWidth}) {
    margin-top: 10px;
    width: 75vw;
  }
`

const cardButtonDimensions = css`
  width: 4vw;
  height: 4vw;

  border-radius: 50%;

  @media (max-width: ${tabletMaxWidth}) {
    width: 7.3vw;
    height: 7.3vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 56px;
    height: 56px;
  }
`

export const About2CardButton = styled.div`
  ${cardButtonDimensions}
  margin-top: -2vw;

  background: ${lightCoral};

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  @media (max-width: ${tabletMaxWidth}) {
    margin-top: -3.3vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    margin-top: -26px;
  }

  :hover {
    background: ${raptureBlue};
  }
`

export const About2CardButtonHoverZone = styled.div`
  /* transparent div that overlays hover button used to detect hover events */
  ${cardButtonDimensions}
  position: relative;
  top: 0;
  left: 0;

  cursor: pointer;

  z-index: 10;
`

export const About2CardButtonIcon = styled.img`
  position: absolute;
  width: 1.1vw;
  height: 1.1vw;
  filter: brightness(0); // set icon to black

  @media (max-width: ${tabletMaxWidth}) {
    width: 2.1vw;
    height: 2.1vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 20px;
    height: 20px;
  }
`

export const About2CardQuote = styled(Body2).attrs({ responsive: true })`
  margin-top: 8px;

  width: 17.5vw;
  height: 5.2vw;

  text-align: center;

  @media (max-width: ${mobileMaxWidth}) {
    width: 62.4vw;
  }
`

export const About2CardIconsDiv = styled.div`
  margin-top: 12px;

  width: max(80px, 5.5vw);
  height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${tabletMaxWidth}) {
    height: 25px;
    margin-top: 56px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 60px;
    height: 20px;
  }
`

export const About2CardIcon = styled(SocialMediaIconHover)`
  width: 1.5vw;
  height: 1.5vw;

  @media (max-width: ${tabletMaxWidth}) {
    margin-top: 4.5vw;

    width: 2.8vw;
    height: 2.8vw;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: auto;
    height: 100%;
  }
`
