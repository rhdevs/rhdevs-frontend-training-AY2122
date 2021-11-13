import React from 'react'

import {
  Page1LineAbovePara,
  Title,
  TitleEm,
  TitleParagraph,
  TitleParagraphDiv,
} from './styles/Page1MainComponents.styled'

const Page1MainContents = () => {
  return (
    <>
      <Title responsive>
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

export default Page1MainContents
