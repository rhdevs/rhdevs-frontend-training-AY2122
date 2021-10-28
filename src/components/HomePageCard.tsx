import React from 'react'
import { StyledCard, StyledGroupNumber, StyledDescriptionText } from './styles/GroupCard.styled'

type Props = {
  title: string
  description?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const HomePageCard = (props: Props) => {
  return (
    <StyledCard onClick={props.onClick}>
      <StyledGroupNumber>{props.title}</StyledGroupNumber>
      <StyledDescriptionText>{props.description}</StyledDescriptionText>
    </StyledCard>
  )
}

export default HomePageCard
