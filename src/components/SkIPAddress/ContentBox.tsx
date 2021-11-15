import React from 'react'
import { StyledBody, StyledContainer, StyledHeader } from './styles/ContentBox.styled'

interface Content {
  header: string
  body: string
}

const ContentBox = (props: Content) => {
  return (
    <StyledContainer>
      <StyledHeader>{props.header}</StyledHeader>
      <StyledBody>{props.body}</StyledBody>
    </StyledContainer>
  )
}

export default ContentBox
