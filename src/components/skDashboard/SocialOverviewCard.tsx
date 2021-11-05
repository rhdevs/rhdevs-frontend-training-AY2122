import React from 'react'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import {
  BottomRow,
  StyledCard,
  StyledIcon,
  StyledStats,
  StyledPageView,
  TopRow,
  ChangeContainer,
} from './styles/SocialOverviewCard.styled'

import { OverviewCard } from '../../store/skDashboard/types'

const SocialOverviewCard = (props: OverviewCard) => {
  return (
    <StyledCard>
      <TopRow>
        <StyledPageView>{props.statsName}</StyledPageView>
        <StyledIcon src={props.icon} />
      </TopRow>
      <BottomRow>
        <StyledStats>{props.stats}</StyledStats>
        <ChangeContainer increase={props.increase}>
          {props.increase ? <CaretUpOutlined /> : <CaretDownOutlined />}
          {props.change}%
        </ChangeContainer>
      </BottomRow>
    </StyledCard>
  )
}

export default SocialOverviewCard
