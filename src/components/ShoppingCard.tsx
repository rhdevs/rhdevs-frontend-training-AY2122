import React from 'react'
import { StyledCard, StyledNamesText } from './styles/ShoppingCard.styled'

type Props = {
  names: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const ShoppingCard = (props: Props) => {
  return (
    <StyledCard onClick={props.onClick}>
      <StyledNamesText>{props.names}</StyledNamesText>
    </StyledCard>
  )
}

export default ShoppingCard
