import React from 'react'

import { ContactButton, HeaderBarLinks, MyTeamLogo } from './IndexPageComponents'
import {
  HeaderBar,
  HeaderBarTextDiv,
  Page1LineAbovePara,
  Title,
  TitleEm,
  TitleParagraph,
  TitleParagraphDiv,
} from './styles/Page1MainComponents.styled'

export const Page1HeaderBar = () => {
  return (
    <>
      <HeaderBar>
        <HeaderBarTextDiv>
          <MyTeamLogo top="2px" />
          <HeaderBarLinks left="17vw" top="5px" responsive={true} />
        </HeaderBarTextDiv>
        <ContactButton color="light" />
      </HeaderBar>
    </>
  )
}

export const Page1HeaderContents = () => {
  return (
    <>
      <Title>
        Find the best <TitleEm>talent</TitleEm>
      </Title>
      <TitleParagraphDiv>
        <Page1LineAbovePara />
        <TitleParagraph>
          Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into
          the abundance of global talent. We’re about to change that.
        </TitleParagraph>
      </TitleParagraphDiv>
    </>
  )
}
