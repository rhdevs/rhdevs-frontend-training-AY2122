import React from 'react'
import { StyledCard, StyledGroupNumber, StyledDescriptionText, StyledCardLink } from './styles/GroupCard.styled'

type Props = {
  title: string
  description?: string
  link?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Card = (props: Props) => {
  return (
    <StyledCard onClick={props.onClick}>
      <StyledGroupNumber>{props.title}</StyledGroupNumber>
      <StyledDescriptionText>{props.description}</StyledDescriptionText>
      <StyledCardLink>{props.link}</StyledCardLink>
    </StyledCard>
  )
}

export default Card
