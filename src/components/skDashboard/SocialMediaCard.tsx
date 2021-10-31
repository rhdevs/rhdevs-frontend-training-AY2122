import React from 'react'
import { StyledCard, StyledFollowerCount, StyledNamesText } from './styles/SocialMediaCard.styled'

type Props = {
  names: string
  followerCount: string
}

const SocialMediaCard = (props: Props) => {
  return (
    <StyledCard>
      <StyledFollowerCount>{props.followerCount}</StyledFollowerCount>
      <StyledNamesText>{props.names}</StyledNamesText>
    </StyledCard>
  )
}

export default SocialMediaCard
