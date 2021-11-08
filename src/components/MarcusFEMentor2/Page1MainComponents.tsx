import React from 'react'
import {
  BarLink,
  ContactBtnText,
  HeaderBar,
  HeaderBarLinks,
  HeaderBarTextDiv,
  HeaderContactBtn,
  MyTeamLogo,
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
          <MyTeamLogo>myteam</MyTeamLogo>
          <HeaderBarLinks>
            <BarLink>home</BarLink>
            <BarLink>about</BarLink>
          </HeaderBarLinks>
        </HeaderBarTextDiv>
        <HeaderContactBtn>
          <ContactBtnText>contact us</ContactBtnText>
        </HeaderContactBtn>
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
        <TitleParagraph>
          Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into
          the abundance of global talent. We’re about to change that.
        </TitleParagraph>
      </TitleParagraphDiv>
    </>
  )
}
