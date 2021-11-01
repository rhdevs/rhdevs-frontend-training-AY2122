import React from 'react'
import {
  BottomRow,
  StyledCard,
  StyledIcon,
  StyledStats,
  StyledPageView,
  TopRow,
} from './styles/SocialOverviewCard.styled'
type Props = {
  icon: string
  statsName: string
  stats: string
}

const SocialOverviewCard = (props: Props) => {
  return (
    <StyledCard>
      <TopRow>
        <StyledPageView>{props.statsName}</StyledPageView>
        <StyledIcon src={props.icon} />
      </TopRow>
      <BottomRow>
        <StyledStats>{props.stats}</StyledStats>
      </BottomRow>
    </StyledCard>
  )
}

export default SocialOverviewCard
