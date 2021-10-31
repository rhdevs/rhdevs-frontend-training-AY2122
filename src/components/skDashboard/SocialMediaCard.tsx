import React from 'react'
import { StyledCard, StyledFollowerCount, StyledIcon, StyledNamesText } from './styles/SocialMediaCard.styled'
type Props = {
  names: string
  icon: string
  followerCount: string
}

const SocialMediaCard = (props: Props) => {
  return (
    <StyledCard>
      <StyledIcon src={props.icon} />
      <StyledFollowerCount>{props.followerCount}</StyledFollowerCount>
      <StyledNamesText>{props.names}</StyledNamesText>
    </StyledCard>
  )
}

export default SocialMediaCard
