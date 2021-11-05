import React from 'react'
import {
  ChangeContainer,
  StyledCard,
  StyledCardTop,
  StyledFollowerCount,
  StyledHandle,
  StyledIcon,
  StyledNamesText,
} from './styles/SocialMediaCard.styled'

interface MediaCard {
  names: string
  platform: string
  icon: string
  followerCount: string
  increase: boolean
  change: string
}

const SocialMediaCard = (props: MediaCard) => {
  return (
    <StyledCard platform={props.platform}>
      <StyledCardTop>
        <StyledIcon src={props.icon} />
        <StyledHandle>{props.names}</StyledHandle>
      </StyledCardTop>
      <StyledFollowerCount>{props.followerCount}</StyledFollowerCount>
      <StyledNamesText>FOLLOWERS</StyledNamesText>
      <ChangeContainer increase={props.increase}>{props.change} Today</ChangeContainer>
    </StyledCard>
  )
}

export default SocialMediaCard
