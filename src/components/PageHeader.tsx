import React from 'react'
import { StyledPageDescription, StyledPageHeader } from '../pages/LandingPage/styles/LandingPage.styled'

type Props = {
  title: string
  description?: string
}

const PageHeader = (props: Props) => {
  return (
    <>
      <StyledPageHeader>{props.title}</StyledPageHeader>
      <StyledPageDescription>{props.description}</StyledPageDescription>
      <hr />
      <br />
    </>
  )
}

export default PageHeader
