import styled from 'styled-components'

import { lightCoral, white } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import { h1Small, h2Styled, h3Styled } from '../../../../pages/FrontendMentor/MarcusFEMentor2/styles/TextStyles.styled'

export const Contact1ContentsDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 428px;
  left: 11.5vw;
  top: 241px;
`

export const Contact1Title = styled(h1Small)`
  position: absolute;
  width: max(350px, 24vw);
  height: 100px;
  left: 0;
  top: 0;

  line-height: 100px;
`

export const Contact1Subtitle = styled(h2Styled)`
  position: absolute;
  width: 37.5vw;
  height: 48px;
  left: 0;
  top: 116px;

  font-size: 32px;
  line-height: 48px;

  color: ${lightCoral};
`

export const Contact1AboutDiv = styled.div`
  position: absolute;
  width: 37.5vw;
  height: 232px;
  left: 0;
  top: 196px;

  color: ${white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Contact1AboutEntryDiv = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Contact1Icon = styled.img`
  width: 72px;
  height: 72px;
`

export const Contact1AboutContent = styled(h3Styled)`
  height: 28px;
  margin-left: 23px;
`

export const Contact1FormDiv = styled.form`
  position: absolute;
  width: 37.5vw;
  height: 420px;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
