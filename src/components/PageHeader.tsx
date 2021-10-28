import React from 'react'
import { StyledPageDescription, StyledPageHeader } from '../pages/LandingPage/styles/LandingPage.styled'
import { StyledCardLink } from './styles/GroupCard.styled'

type Props = {
  title: string
  description?: string | JSX.Element
  link?: string
}

const PageHeader = (props: Props) => {
  return (
    <>
      <StyledPageHeader>{props.title}</StyledPageHeader>
      <StyledPageDescription>{props.description}</StyledPageDescription>
      <StyledCardLink>{props.link}</StyledCardLink>
      <hr />
      <br />
    </>
  )
}

export default PageHeader
